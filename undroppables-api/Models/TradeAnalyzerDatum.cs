using System;
using System.Collections.Generic;

namespace UndroppablesAPI.Models;

public partial class TradeAnalyzerDatum
{
    public string Id { get; set; } = null!;

    public string? Name { get; set; }

    public string? Position { get; set; }

    public string? Team { get; set; }

    public double? MarketValue { get; set; }

    public double? MyValue { get; set; }

    public double? ValueDiffBetweenMyValueAndMarketValue { get; set; }

    public double? Prpscore { get; set; }

    public string? ProjectedNextOffseasonDynastyValue { get; set; }

    public double? ValueDifferenceBetweenCurrentMarketValueAndPnodv { get; set; }

    public double? Pnodvscore { get; set; }

    public double? Rvsscore { get; set; }

    public double? JaxValue { get; set; }

    public double? TravValue { get; set; }

    public double? JoeValue { get; set; }

    public double? ConsensusValue { get; set; }
}
