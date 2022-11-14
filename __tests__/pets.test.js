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
    const singleRow = await res.body.find((pet) => (pet.id = '1'));
    expect(singleRow).toMatchObject({
      first_name: 'Viviana',
      last_name: 'Coorington',
      kind: 'dog',
      variety: 'cocker-spanial',
      nickname: 'Bubble',
    });
  });

  test('POST /pets creates new pet in the database', async () => {
    const newPet = {
      first_name: 'Rick',
      last_name: 'Somadd',
      kind: 'turtle',
      variety: 'patagoniaemys',
      nickname: 'grump',
    };
    const res = await request(app).post('/pets').send(newPet);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Rick",
        "id": 6,
        "kind": "turtle",
        "last_name": "Somadd",
        "nickname": "grump",
        "variety": "patagoniaemys",
      }
    `);
  });

  test('PUT /pets/:id update pet with id 1', async () => {
    const res = await request(app).put('/pets/1').send({ kind: 'canine' });
    expect(res.statusCode).toBe(200);
    expect(res.body.kind).toMatch('canine');
  });

  test('DELETE /pets/:id delete pet with id', async () => {
    const res = await request(app).delete('/pets/1');
    expect(res.statusCode).toMatchInlineSnapshot('200');
  });

  afterAll(() => {
    return setup(pool);
  });
});
