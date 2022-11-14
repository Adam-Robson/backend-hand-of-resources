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
    const singleRow = await res.body.find((person) => (person.id = '1'));
    expect(singleRow).toMatchObject({
      first_name: 'Cissiee',
      last_name: 'Guilloneau',
    });
  });

  test('GET /associates route to return all associates', async () => {
    const res = await request(app).get('/associates');
    expect(res.body.length).toEqual(15);
    expect(res.statusCode).toEqual(200);
  });

  test('POST /associates creates new associate in the database', async () => {
    const newAssociate = {
      first_name: 'John',
      last_name: 'Smith',
      email_address: 'john@smith.com',
      gender: 'Male',
      ip_address: '127.999.133',
    };
    const res = await request(app).post('/associates').send(newAssociate);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "email_address": "john@smith.com",
        "first_name": "John",
        "gender": "Male",
        "id": 16,
        "ip_address": "127.999.133",
        "last_name": "Smith",
      }
    `);
  });

  // test('PUT /associates/1 update associate with id 1', async () => {
  //   const res = await request(app).put('/associates/1').send({ gender: 'Female' });
  //   expect(res.statusCode).toBe(200);
  //   expect(res.body.gender).toBe('Female');
  // });

  afterAll(() => {
    return setup(pool);
  });
});
