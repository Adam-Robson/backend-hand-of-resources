const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('newbies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /newbies returns a list of newbies', async () => {
    const res = await request(app).get('/newbies');
    expect(res.body.length).toEqual(10);
    expect(res.statusCode).toEqual(200);
  });
});
