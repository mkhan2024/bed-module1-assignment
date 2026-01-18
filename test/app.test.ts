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