public class ComplaintDTO
{
    public int ComplaintId { get; set; }

    public int? TenantId { get; set; }

    public int? PgId { get; set; }

    public string? Message { get; set; }

    public string? Status { get; set; }

    public DateTime? ComplaintAt { get; set; }

}