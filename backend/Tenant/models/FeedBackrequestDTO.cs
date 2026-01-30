public class FeedbackRequestDTO
{
    public int TenantId { get; set; }
    public int PgId { get; set; }
    public int Rating { get; set; }   // 1–5
    public string? Comment { get; set; }
}
