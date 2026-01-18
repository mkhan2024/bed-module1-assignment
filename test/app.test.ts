import supertest from 'supertest'; // for testing api calls
import app from '../src/app'; // the app to test

const request = supertest(app); // sets up request

describe('Health Check Endpoint', () => { // groups tests
  it('should return healthy status', async () => { // test case
    const res = await request.get('/api/v1/health'); // makes get request
    expect(res.status).toBe(200); // checks status
    expect(res.body.status).toBe('OK'); // checks body
  });
});

describe('Portfolio Performance Endpoint', () => { // groups tests
  it('should return performance data', async () => {
    const res = await request.get('/api/v1/portfolio/performance?initialInvestment=10000&currentValue=12000');
    expect(res.status).toBe(200);
    expect(res.body.percentageChange).toBe(20);
  });

  it('should return 400 for invalid input', async () => { // edge case test
    const res = await request.get('/api/v1/portfolio/performance?initialInvestment=0&currentValue=12000');
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });
});