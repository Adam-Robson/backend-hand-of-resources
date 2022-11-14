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

  static async insert(newCandidate) {
    const { rows } = await pool.query(
      `INSERT INTO candidates (first_name, last_name, email_address, gender, dob)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`, [
        newCandidate.first_name,
        newCandidate.last_name,
        newCandidate.email_address,
        newCandidate.gender,
        newCandidate.dob]
    );
    if (!rows[0]) return null;
    return new Candidates(rows[0]);
  }


  static async updateById(id, newAttributes) {
    const candidate = await Candidates.getById(id);
    if (!candidate) return null;
    const newCandidate = { ...candidate, ...newAttributes };
    const { rows } = await pool.query(
      `UPDATE candidates
      SET first_name = $2,
      last_name = $3,
      email_address = $4,
      gender = $5,
      dob = $6
      WHERE id = $1
      RETURNING *`, [
        newCandidate.id,
        newCandidate.first_name,
        newCandidate.last_name,
        newCandidate.email_address,
        newCandidate.gender,
        newCandidate.dob
      ]
    );
    if (!rows[0]) return null;
    return new Candidates(rows[0]);
  }


};
