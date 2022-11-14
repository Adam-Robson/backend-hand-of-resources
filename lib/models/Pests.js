const pool = require('../utils/pool');

module.exports = class Pests {
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
      'SELECT * from pests'
    );
    if (!rows) return null;
    return rows.map((row) => new Pests(row));
  }
};
