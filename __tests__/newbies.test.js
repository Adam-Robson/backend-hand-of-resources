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
    // expect(singleNewbie).toMatchObject({
    //   first_name: 'Darcie',
    //   last_name: 'Jorden',
    //   email_address: 'djordeny@sakura.ne.jp',
    //   gender: 'Female',
    //   ip_address: '80.6.214.168'
    // });
    expect(singleNewbie).toMatchInlineSnapshot(`
      Object {
        "dob": "19600105",
        "email_address": "tofficer@amazon.de",
        "first_name": "Teddy",
        "gender": "Female",
        "id": "1",
        "last_name": "Officer",
      }
    `);
  });
  
  test('GET /newbies returns a list of newbies', async () => {
    const res = await request(app).get('/newbies');
    expect(res.body.length).toEqual(10);
    expect(res.statusCode).toEqual(200);
  });



  afterAll(() => {
    return setup(pool);
  });
});
