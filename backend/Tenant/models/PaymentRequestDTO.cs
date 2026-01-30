public class PaymentRequestDTO
{
    public int BookingId { get; set; }
    public int Amount { get; set; }
    public string PaymentMode { get; set; } = null!; 
}
