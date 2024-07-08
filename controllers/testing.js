const router = require('express').Router()
const Note = require('../models/note')
const User = require('../models/user')

router.post('/reset', async (request, response) => {
  // Reset database for end to end testing
  await Note.deleteMany({})
  await User.deleteMany({})

  response.status(204).end()
})

module.exports = router