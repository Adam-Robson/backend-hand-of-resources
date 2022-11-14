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
};
