import { Router } from 'express'; // for grouping routes
import { calculatePortfolioPerformance } from '../../../portfolio/portfolioPerformance'; // imports the function

const router = Router();

router.get('/health', (req, res) => { // health check route
  res.status(200).json({ // sends back status
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

router.get('/portfolio/performance', (req, res) => { // portfolio route
  const initial = parseFloat(req.query.initialInvestment as string); // gets initial from query
  const current = parseFloat(req.query.currentValue as string); // gets current

  if (isNaN(initial) || isNaN(current) || initial <= 0) { // checks inputs for edges
    return res.status(400).json({ error: 'Invalid input: initialInvestment and currentValue must be positive numbers' });
  }

  const result = calculatePortfolioPerformance(initial, current); // calls function
  res.status(200).json(result); // sends result
});

export default router;