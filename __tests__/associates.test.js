const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('associates route', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /associates/:id route to return an associate detail', async () => {
    const res = await request(app).get('/associates');
    const singleRow = await res.body.find((person) => person.id = '1');
    expect(singleRow).toMatchObject({ first_name: 'Cissiee', last_name: 'Guilloneau' });
  });

  test('GET /associates route to return all associates', async () => {
    const res = await request(app).get('/associates');
    expect(res.body.length).toEqual(15);
    expect(res.statusCode).toEqual(200);
  });

  afterAll(() => {
    return setup(pool);
  });

});
