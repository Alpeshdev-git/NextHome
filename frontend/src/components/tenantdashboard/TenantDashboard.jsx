import { useState } from "react";
import "../../css/TenantDashBoard.css";

const PG_LIST = [
  {
    id: 1,
    name: "NextHome Elite PG",
    location: "Bangalore",
    sharing: "1, 2, 3 Sharing",
    rent: "₹9,500",
    owner: "Ramesh Kumar",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
  },
  {
    id: 2,
    name: "Comfort Stay PG",
    location: "Pune",
    sharing: "2, 3 Sharing",
    rent: "₹8,000",
    owner: "Anita Sharma",
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
  },
  // (keep rest of your PGs as-is)
];

export default function TenantDashBoard() {
  const [selectedPG, setSelectedPG] = useState(null);
  const [search, setSearch] = useState("");
  const [showNotif, setShowNotif] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const filteredPGs = PG_LIST.filter(pg =>
    pg.name.toLowerCase().includes(search.toLowerCase()) ||
    pg.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="tenant-dashboard">
      {/* NAVBAR */}
      <div className="tenant-navbar">
        <div className="nav-left">🏠 NextHome</div>

        <div className="nav-center">
          <input
            className="search-box"
            placeholder="Search PG or City"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="nav-right">
          <button onClick={() => setShowNotif(!showNotif)}>🔔</button>
          <button onClick={() => setShowProfile(!showProfile)}>👤</button>
        </div>

        {showNotif && (
          <div className="dropdown notif">
            <p>🔔 No new notifications</p>
          </div>
        )}

        {showProfile && (
          <div className="dropdown profile">
            <p>My Profile</p>
            <p>Bookings</p>
            <p className="logout">Logout</p>
          </div>
        )}
      </div>

      {/* PG CARDS */}
      <div className="card-container">
        {filteredPGs.map(pg => (
          <div
            key={pg.id}
            className="pg-card"
            onClick={() => setSelectedPG(pg)}
          >
            <img src={pg.image} alt={pg.name} />
            <div className="pg-info">
              <h3>{pg.name}</h3>
              <p>📍 {pg.location}</p>
              <p>⭐ {pg.rating}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedPG && (
        <div className="modal-overlay" onClick={() => setSelectedPG(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <h2>{selectedPG.name}</h2>
            <p><b>Location:</b> {selectedPG.location}</p>
            <p><b>Owner:</b> {selectedPG.owner}</p>
            <p><b>Rent:</b> {selectedPG.rent}</p>
            <p><b>Sharing:</b> {selectedPG.sharing}</p>
            <p><b>Rating:</b> {selectedPG.rating}</p>

            <div className="modal-buttons">
              <button className="book">Book PG</button>
              <button className="pay">Pay Now</button>
            </div>

            <button className="close" onClick={() => setSelectedPG(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}