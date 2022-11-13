const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('associates route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /associates route to return all associates', async () => {
    const res = await request(app).get('/associates');
    expect(res.body.length).to.equal(15);
    expect(res.statusCode).to.equal(200);
  });

  afterAll(() => {
    return setup(pool);
  });
  
});
