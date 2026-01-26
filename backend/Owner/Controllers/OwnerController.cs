using Owner.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Owner.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OwnerController : ControllerBase
    {
        [HttpPost("addpgproperty")]
        public string postPgProperty([FromBody] Pg_PropertyDTO pg)
        {
            if (pg == null)
            {
                return "Invalid property Data";
            }
            var db = new NexthomeContext();
            var entity = new PgProperty
            {
                OwnerId = pg.OwnerId,
                PgName = pg.PgName,
                Description = pg.Description,
                AreaId = pg.AreaId,
                Type = pg.Type,
                Rent = pg.Rent,
                Facility = pg.Facility,
                Status = pg.Status
            };
            db.PgProperties.Add(entity);
            db.SaveChanges();
            return "Save Successfully";
        }
    }
   
}
