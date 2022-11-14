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

  test('GET /pets/:id returns a pet detail', async () => {
    const res = await request(app).get('/pets');
    const singleRow = await res.body.find((pet) => (pet.id = '4'));
    expect(singleRow).toMatchObject({
      first_name: 'Mayer',
      last_name: 'Fitzsymons',
      kind: 'goldfish',
      variety: 'shubunkin',
      nickname: 'jeffe'
    });
  });

  afterAll(() => {
    return setup(pool);
  });

});
