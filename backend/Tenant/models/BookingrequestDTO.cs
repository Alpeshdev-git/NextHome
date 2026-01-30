namespace Tenant.models
{
    public class BookingRequestDTO
    {
        public int RoomId { get; set; }        
        public int TenantId { get; set; }       
        public DateTime? StartDate { get; set; } 
        public DateTime? EndDate { get; set; }   
        public int? RentAmount { get; set; }     
        public string? Notes { get; set; }    
    }
}
