const db = require('../db')

class UserController {
  async addUser(req, res) {
    const { name, surname } = req.body
    const newUser = await db.query(
      'INSERT INTO users (name, surname) values ($1, $2) RETURNING *',
      [name, surname]
    )
    res.json(newUser.rows[0])
  }
  async getUsers(req, res) {
    const users = await db.query('SELECT * FROM users')

    res.json(users.rows)
  }
  async deleteUser(req, res) {}
  async updateUser(req, res) {}
}

module.exports = new UserController()
