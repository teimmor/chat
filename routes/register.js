const express = require('express')
const router = express.Router()
const registerController = require('../controllers/RegisterController')

router.post('/register', registerController.register)

module.exports = router