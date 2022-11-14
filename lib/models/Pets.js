const pool = require('../utils/pool');

module.exports = class Pets {
  constructor({
    id,
    first_name,
    last_name,
    kind,
    variety,
    nickname }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.kind = kind;
    this.variety = variety;
    this.nickname = nickname;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from pets'
    );
    if (!rows) return null;
    return rows.map((row) => new Pets(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from pets WHERE id = $1',
      [id]);
    if (!rows) return null;
    return new Pets(rows[0]);
  }

  static async insert(newPet) {
    const { rows } = await pool.query(
      `INSERT INTO pets (first_name, last_name, kind, variety, nickname)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`, [
        newPet.first_name,
        newPet.last_name,
        newPet.kind,
        newPet.variety,
        newPet.nickname]
    );
    if (!rows[0]) return null;
    return new Pets(rows[0]);
  }

  static async updateById(id, newAttributes) {
    const pet = await Pets.getById(id);
    if (!pet) return null;
    const newPet = { ...pet, ...newAttributes };
    const { rows } = await pool.query(
      `UPDATE pets
      SET first_name = $2,
      last_name = $3,
      kind = $4,
      variety = $5,
      nickname = $6
      WHERE id = $1
      RETURNING *`, [
        newPet.id,
        newPet.first_name,
        newPet.last_name,
        newPet.kind,
        newPet.variety,
        newPet.nickname
      ]
    );
    if (!rows[0]) return null;
    return new Pets(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM pets
    WHERE id = $1
    RETURNING *`,
      [id]
    );
    if (!rows[0]) return null;
    return new Pets(rows[0]);
  }
};
