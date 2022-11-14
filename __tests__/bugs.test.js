const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('bugs route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /bugs route to return all bugs', async () => {
    const res = await request(app).get('/bugs');
    expect(res.body.length).toEqual(5);
    expect(res.statusCode).toEqual(200);
  });


  afterAll(() => {
    return setup(pool);
  });
});
