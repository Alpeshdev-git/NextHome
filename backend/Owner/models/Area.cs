using System;
using System.Collections.Generic;

namespace Owner.models;

public partial class Area
{
    public int AreaId { get; set; }

    public int CityId { get; set; }

    public string AreaName { get; set; } = null!;

    public virtual City City { get; set; } = null!;

    public virtual ICollection<PgProperty> PgProperties { get; set; } = new List<PgProperty>();
}
