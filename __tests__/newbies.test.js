const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('newbies routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  test('GET /newbies/:id returns a newbie detail', async () => {
    const res = await request(app).get('/newbies');
    const singleNewbie = await res.body.find((newbie) => (newbie.id = '1'));
    expect(singleNewbie).toMatchObject({
      first_name: 'Darcie',
      last_name: 'Jorden',
      email_address: 'djordeny@sakura.ne.jp',
      gender: 'Female',
      ip_address: '80.6.214.168',
    });
    expect(singleNewbie).toMatchInlineSnapshot(`
      Object {
        "email_address": "djordeny@sakura.ne.jp",
        "first_name": "Darcie",
        "gender": "Female",
        "id": "1",
        "ip_address": "80.6.214.168",
        "last_name": "Jorden",
      }
    `);
  });

  test('GET /newbies returns a list of newbies', async () => {
    const res = await request(app).get('/newbies');
    expect(res.body.length).toEqual(11);
    expect(res.statusCode).toEqual(200);
  });

  test('POST /newbies creates new newbie in the database', async () => {
    const newNewbie = {
      first_name: 'Jezel',
      last_name: 'Bagrooch',
      email_address: 'jez@ebel.ui',
      gender: 'Polygender',
      ip_address: '1119.004.79.4',
    };
    const res = await request(app).post('/newbies').send(newNewbie);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "email_address": "jez@ebel.ui",
        "first_name": "Jezel",
        "gender": "Polygender",
        "id": 12,
        "ip_address": "1119.004.79.4",
        "last_name": "Bagrooch",
      }
    `);
  });

  afterAll(() => {
    return setup(pool);
  });
});
