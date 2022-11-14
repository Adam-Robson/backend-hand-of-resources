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

  static async insert(newBug) {
    const { rows } = await pool.query(
      `INSERT INTO bugs
      (first_name, last_name, kind, age)
      VALUES
      ($1, $2, $3, $4)
      RETURNING *`, [
        newBug.first_name,
        newBug.last_name,
        newBug.kind,
        newBug.age]
    );
    if (!rows[0]) return null;
    return new Bugs(rows[0]);
  }

  static async updateById(id, newAttributes) {

    const bug = await Bugs.getById(id);

    if (!bug) return null;
    const newBug = { ...bug, ...newAttributes };
    const { rows } = await pool.query(
      `UPDATE bugs
      SET first_name = $2,
      last_name = $3,
      kind = $4,
      age = $5
      WHERE id = $1
      RETURNING *`, [
        newBug.id,
        newBug.first_name,
        newBug.last_name,
        newBug.kind,
        newBug.age,
      ]
    );
    if (!rows[0]) return null;
    return new Bugs(rows[0]);
  }
};
