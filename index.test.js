const request = require('supertest');
const app = require('./index');

test('GET / returns Hello message', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
  expect(response.text).toBe('Hello CI/CD World!');
});