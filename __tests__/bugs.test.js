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

  test('GET /bugs/:id route to return an bug detail', async () => {
    const res = await request(app).get('/bugs');
    const singleBug = await res.body.find((bug) => (bug.id = '1'));
    expect(singleBug).toMatchObject({
      first_name: 'Benjamin',
      last_name: 'Pallet',
    });
  });

  test('POST /bugs creates new bug in the database', async () => {
    const newBug = {
      first_name: 'B',
      last_name: 'Honey',
      kind: 'bee',
      age: 7,
    };
    const res = await request(app).post('/bugs').send(newBug);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "age": 7,
        "first_name": "B",
        "id": 6,
        "kind": "bee",
        "last_name": "Honey",
      }
    `);
  });

  afterAll(() => {
    return setup(pool);
  });
});
