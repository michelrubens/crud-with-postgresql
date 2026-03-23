const express = require('express')

const { listUsers, createUser, deleteUser } = require('../database/users')

const router = express.Router()

// curl -X GET http://localhost:3003/users
router.get('/', async function (_req, res) {
  const users = await listUsers()
  res.status(200).json(users)
})

// curl -X POST http://localhost:3003/users -H "Content-Type: application/json" -d "{\"name\":\"Thiago\",\"email\":\"thiago@teste.com\"}"
router.post('/', async function (req, res) {
  const { name, email } = req.body
  const user = await createUser(name, email)
  res.status(201).json(user)
})

// curl -X DELETE http://localhost:3003/users/{id_user}
router.delete('/:id', async function (req, res) {
  const id = req.params.id
  const user = await deleteUser(id)
  if (user.message) {
    return res.status(404).json(user)
  } else {
    return res.status(200).json(user)
  }
})

module.exports = router
