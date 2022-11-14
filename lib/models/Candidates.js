const pool = require('../utils/pool');

module.exports = class Candidates {
  constructor({
    id,
    first_name,
    last_name,
    email_address,
    gender,
    dob }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email_address = email_address;
    this.gender = gender;
    this.dob = dob;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from candidates'
    );
    if (!rows) return null;
    return rows.map((row) => new Candidates(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from candidates WHERE id = $1',
      [id]);
    if (!rows) return null;
    return new Candidates(rows[0]);
  }
};
