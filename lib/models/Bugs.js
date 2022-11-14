const pool = require('../utils/pool');

module.exports = class Bugs {
  constructor({
    id,
    first_name,
    last_name,
    kind,
    age }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.kind = kind;
    this.age = age;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from bugs'
    );
    if (!rows) return null;
    return rows.map((row) => new Bugs(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM bugs WHERE id = $1',
      [id]);
    if (!rows[0]) return null;
    return new Bugs(rows[0]);
  }

};
