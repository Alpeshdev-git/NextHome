import React, { useState, useEffect } from 'react';
import "../css/register.css";

function Register() {
  const [formData, setFormData] = useState({
    id: '',
    roleId: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    gender: '',
    createdAt: '',
    status: ''
  });

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5012/api/Nexthome/roles')
      .then(res => res.json())
      .then(data => {
        console.log('Roles from API:', data);
        const mappedRoles = data.map(role => ({
          id: role.roleId,
          name: role.roleName
        }));
        setRoles(mappedRoles);
      })
      .catch(err => console.error('Error fetching roles:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...formData, roleId: Number(formData.roleId) };

    fetch('http://localhost:5012/api/Nexthome/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.text())  
    .then(data => {
      console.log('Data added successfully:', data); 

      setFormData({
        id: '', roleId: '', name: '', email: '', password: '', phone: '', gender: '', createdAt: '', status: ''
      });
    })
    .catch(err => console.error('Error registering user:', err));
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">Register</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />

          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <select name="roleId" value={formData.roleId} onChange={handleChange}>
            <option value="">Select Role</option>
            {roles.map(role => (
              <option key={role.id} value={role.id}>{role.name}</option>
            ))}
          </select>

          <input type="date" name="createdAt" value={formData.createdAt} onChange={handleChange} />

          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <button type="submit" className="register-button">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;