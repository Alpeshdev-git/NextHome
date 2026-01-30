public class ComplaintRequestDTO
{
    public int TenantId { get; set; }
    public int PgId { get; set; }
    public string Message { get; set; } = null!;
}
