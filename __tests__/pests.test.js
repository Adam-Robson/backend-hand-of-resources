const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('pests routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /pests returns a list of pests', async () => {
    const res = await request(app).get('/pests');
    expect(res.body.length).toEqual(5);
    expect(res.statusCode).toEqual(200);
  });
  
});
