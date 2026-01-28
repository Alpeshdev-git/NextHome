public class OwnerBookingDTO
{
    public int BookingId { get; set; }
    public int? TenantId { get; set; }       
    public int? RoomId { get; set; }
    public DateOnly? BookDate { get; set; }  
    public DateOnly? StartDate { get; set; }
    public DateOnly? EndDate { get; set; }
    public  string BookingStatus { get; set; }=string.Empty;
}
