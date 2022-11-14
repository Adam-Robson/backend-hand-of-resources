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

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT * from newbies WHERE id = $1',
      [id]);
    if (!rows) return null;
    return new Newbies(rows[0]);
  }

  static async insert(newNewbie) {
    const { rows } = await pool.query(
      `INSERT INTO newbies (first_name, last_name, email_address, gender, ip_address)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`, [
        newNewbie.first_name,
        newNewbie.last_name,
        newNewbie.email_address,
        newNewbie.gender,
        newNewbie.ip_address]
    );
    if (!rows[0]) return null;
    return new Newbies(rows[0]);
  }


  static async updateById(id, newAttributes) {

    const newbie = await Newbies.getById(id);
    if (!newbie) return null;
    const newNewbie = { ...newbie, ...newAttributes };

    const { rows } = await pool.query(
      `UPDATE newbies
      SET first_name = $2,
      last_name = $3,
      email_address = $4,
      gender = $5,
      ip_address = $6
      WHERE id = $1
      RETURNING *`, [
        newNewbie.id,
        newNewbie.first_name,
        newNewbie.last_name,
        newNewbie.email_address,
        newNewbie.gender,
        newNewbie.ip_address
      ]
    );
    if (!rows[0]) return null;
    return new Newbies(rows[0]);
  }


  static async delete(id) {
    const { rows } = await pool.query(
      `DELETE FROM newbies
    WHERE id = $1
    RETURNING *`,
      [id]
    );
    if (!rows[0]) return null;
    return new Newbies(rows[0]);
  }
};
