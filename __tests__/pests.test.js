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

  test('GET /pests/:id returns a single pest', async () => {
    const res = await request(app).get('/pests');
    const singlePest = await res.body.find((pest) => pest.id = '1');
    expect(singlePest).toMatchObject({
      first_name: 'Benjamin',
      last_name: 'Pallet',
      kind: 'Bed Bug',
      age: '128 going on 18'
    });
    expect(singlePest).toMatchInlineSnapshot();
  });

});
