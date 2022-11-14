const pool = require('../utils/pool');

module.exports = class Newbies {
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
      'SELECT * from newbies'
    );
    if (!rows) return null;
    return rows.map((row) => new Newbies(row));
  }
};
