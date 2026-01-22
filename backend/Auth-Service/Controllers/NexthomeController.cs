using Auth_Service.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Auth_Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NexthomeController : ControllerBase
    {
        [HttpPost("register")]
        public string register(Role r)
        {
            var db = new NexthomeContext();
            db.Roles.Add(r);
            db.SaveChanges();
            return "Inserted succesfully";
        }

        [HttpPost("pg-property")]
        public string insertproperty(PgProperty pg)
        {
            var db = new NexthomeContext();
            int id = pg.OwnerId;
            User u = db.Users.Find(id);
            if (u.Role.RoleName.ToLower() == "owner")
            {
                db.PgProperties.Add(pg);
                db.SaveChanges();
                return "Listed Successfully";
            }
            else
            {
                return "You have no right to add pg-property";
            }
        }

        [HttpGet("getusers")]
        public IEnumerable<User> GetAllUsers()
        {
            var db = new NexthomeContext();
            return db.Users.ToList();
        }

        [HttpGet("getOneuser")]

        public object GetOneUser(int id)
        {
            var db = new NexthomeContext();

            var user = db.Users.Include(u => u.Role)
                               .FirstOrDefault(u => u.UserId == id);

            if (user == null)
                return new { message = "User not found" };

            return new
            {
                user.UserId,
                user.Name,
                user.Email,
                user.Phone,
                user.Gender,
                user.CreatedAt,
                user.Status,
                Role = user.Role == null ? null : new
                {
                    user.Role.RoleId,
                    user.Role.RoleName
                }
            };
        }


        [HttpGet("login")]
        public string login(string username, string password)
        {
            var db=new NexthomeContext();
            var user = db.Users
                    .FirstOrDefault(u => u.Email == username && u.Password == password);
            if(user!=null)
            {
                return "Login successfull";
            }
            else
            {
                return "login fail";
            }

        }



    }

}
