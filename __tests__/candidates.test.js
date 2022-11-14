const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('candidates routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /candidates returns a list of candidates', async () => {
    const res = await request(app).get('/candidates');
    expect(res.body.length).toEqual(10);
    expect(res.statusCode).toEqual(200);
  });

  afterAll(() => {
    return setup(pool);
  });

});
