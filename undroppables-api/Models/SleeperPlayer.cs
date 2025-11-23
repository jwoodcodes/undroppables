using System;
using System.Collections.Generic;

namespace UndroppablesAPI.Models;

public partial class SleeperPlayer
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Team { get; set; }

    public string? Position { get; set; }
}
