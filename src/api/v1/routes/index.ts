import { Router } from 'express'; // for grouping routes

const router = Router();

router.get('/health', (req, res) => { // health check route
  res.status(200).json({ // sends back status
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

export default router;