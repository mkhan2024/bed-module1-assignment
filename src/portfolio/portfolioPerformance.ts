export interface PortfolioPerformance { // defines the output shape
  initialInvestment: number;
  currentValue: number;
  profitOrLoss: number;
  percentageChange: number;
  performanceSummary: string;
}

export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
  const profitOrLoss = currentValue - initialInvestment; // calculates profit or loss
  const percentageChange = (profitOrLoss / initialInvestment) * 100; // percentage

  const performanceSummary = 
    percentageChange >= 30 ? "Excellent performance! Your investments are doing great."
    : percentageChange >= 10 ? "Solid gain. Keep monitoring your investments"
    : percentageChange > 0 ? "Modest gain. Your portfolio is growing slowly."
    : percentageChange === 0 ? "No change. Your portfolio is holding steady."
    : percentageChange >= -10 ? "Minor loss. Stay calm and review your options."
    : "Significant loss. Review your portfolio strategy."; // handles all cases

  return {
    initialInvestment,
    currentValue,
    profitOrLoss,
    percentageChange,
    performanceSummary,
  };
}