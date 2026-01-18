import { calculatePortfolioPerformance } from '../src/portfolio/portfolioPerformance'; // imports function

describe('calculatePortfolioPerformance', () => { // groups tests
  it('should calculate excellent gain', () => { // test for big gain
    const result = calculatePortfolioPerformance(10000, 13000);
    expect(result.profitOrLoss).toBe(3000); // checks profit
    expect(result.percentageChange).toBe(30); // checks percent
    expect(result.performanceSummary).toBe("Excellent performance! Your investments are doing great."); // checks message
  });

  it('should calculate solid gain', () => {
    const result = calculatePortfolioPerformance(10000, 12000);
    expect(result.profitOrLoss).toBe(2000);
    expect(result.percentageChange).toBe(20);
    expect(result.performanceSummary).toBe("Solid gain. Keep monitoring your investments");
  });

  it('should calculate minor loss', () => {
    const result = calculatePortfolioPerformance(10000, 9500);
    expect(result.profitOrLoss).toBe(-500);
    expect(result.percentageChange).toBe(-5);
    expect(result.performanceSummary).toBe("Minor loss. Stay calm and review your options.");
  });

  it('should calculate no change boundary', () => { // boundary test
    const result = calculatePortfolioPerformance(10000, 10000);
    expect(result.profitOrLoss).toBe(0);
    expect(result.percentageChange).toBe(0);
    expect(result.performanceSummary).toBe("No change. Your portfolio is holding steady.");
  });
});