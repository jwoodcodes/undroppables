using System;
using System.Collections.Generic;

namespace UndroppablesAPI.Models;

public partial class UnscorePlayer
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string? Class { get; set; }

    public double? UnScore { get; set; }

    public double? Height { get; set; }

    public double? Weight { get; set; }

    public double? DraftRound { get; set; }

    public double? DraftPick { get; set; }

    public double? CareerSlotPercentage { get; set; }

    public double? CareerWidePercentage { get; set; }

    public double? HighestContestedTargetPercent { get; set; }

    public string? CareerAveragedStats { get; set; }

    public string? TopModelComps { get; set; }

    public string? RawData { get; set; }
}
