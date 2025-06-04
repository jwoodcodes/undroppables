export interface TradeAnalyzerData {
  id: string;
  name?: string;
  position?: string;
  team?: string;
  marketValue?: number;
  myValue?: number;
  valueDiffBetweenMyValueAndMarketValue?: number;
  PRPScore?: number;
  projectedNextOffseasonDynastyValue?: any; // Adjust type as necessary
  valueDifferenceBetweenCurrentMarketValueAndPNODV?: number;
  PNODVScore?: number;
  RVSScore?: number;
  jaxValue?: number;
  travValue?: number;
  joeValue?: number;
  concensusValue?: number;
}
