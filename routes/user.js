
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')

const userController = require('../controller/user.controller')

router.get('/list', authMiddleware, userController.list.bind(userController))

module.exports = router;
