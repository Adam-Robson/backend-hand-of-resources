const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('pets routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /pets returns a list of pets', async () => {
    const res = await request(app).get('/pets');
    expect(res.body.length).toEqual(5);
    expect(res.statusCode).toEqual(200);
  });

  afterAll(() => {
    return setup(pool);
  });

});
