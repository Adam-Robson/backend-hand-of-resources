const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('people routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('/people route returns a list of people', async () => {
    const res = await request(app).get('/people');
    expect(res.body.length).toEqual(15);
    expect(res.statusCode).toBe(200);
  });

  afterAll(() => {
    pool.end();
  });
});
