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
      'SELECT * from pets WHERE id = $4',
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

};
