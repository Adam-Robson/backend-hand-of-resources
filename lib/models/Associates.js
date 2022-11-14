const pool = require('../utils/pool');

module.exports = class Associates {
  constructor({
    id,
    first_name,
    last_name,
    email_address,
    gender,
    ip_address }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email_address = email_address;
    this.gender = gender;
    this.ip_address = ip_address;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from associates'
    );
    return rows.map((row) => new Associates(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * FROM associates WHERE id = $1',
      [id]);
    return new Associates(rows[0]);
  }

  static async insert(newAssociate) {
    const { rows } = await pool.query(
      `INSERT INTO associates (first_name, last_name, email_address, gender, ip_address)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`, [
        newAssociate.first_name,
        newAssociate.last_name,
        newAssociate.email_address,
        newAssociate.gender,
        newAssociate.ip_address]
    );
    return new Associates(rows[0]);
  }
};
