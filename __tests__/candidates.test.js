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

  test('GET /candidates/:id returns a candidate detail', async () => {
    const res = await request(app).get('/candidates');
    const singleRow = await res.body.find((person) => (person.id = '1'));
    expect(singleRow).toMatchObject({
      first_name: 'Teddy',
      last_name: 'Officer',
      email_address: 'tofficer@amazon.de',
      gender: 'Female',
      dob: '19600105',
    });
  });

  test('POST /candidates creates new candidate in the database', async () => {
    const newCandidate = {
      first_name: 'Tyrinna',
      last_name: 'Swoon',
      email_address: 'tyrinna@swoon.me',
      gender: 'Bigender',
      dob: '19910713',
    };
    const res = await request(app).post('/candidates').send(newCandidate);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "dob": "19910713",
        "email_address": "tyrinna@swoon.me",
        "first_name": "Tyrinna",
        "gender": "Bigender",
        "id": 11,
        "last_name": "Swoon",
      }
    `);
  });

  afterAll(() => {
    return setup(pool);
  });
});
