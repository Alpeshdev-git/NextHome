using System;
using System.Collections.Generic;

namespace Tenant.models;

public partial class Booking
{
    public int BookingId { get; set; }

    public int? TenantId { get; set; }

    public int? RoomId { get; set; }

    public DateTime? BookDate { get; set; }
    public DateTime? StartDate { get; set; }
    public DateTime? EndDate { get; set; }

    public int? RentAmount { get; set; }

    public string? BookingStatus { get; set; }

    public virtual ICollection<Payment> Payments { get; set; } = new List<Payment>();

    public virtual Room? Room { get; set; }

    public virtual User? Tenant { get; set; }
}
