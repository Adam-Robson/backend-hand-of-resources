const pool = require('../utils/pool');

module.exports = class People {
  constructor({ id, first_name, last_name, email, gender, ip_address }) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.ip_address = ip_address;
  }

  static async getAll() {
    const { rows } = await pool.query(
      'SELECT * from people'
    );
    return rows.map((row) => new People(row));
  }
};
