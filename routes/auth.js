
const express = require('express')
const router = express.Router()

// const authMiddleware = require('../middleware/auth')
const { validate, validationErrors } = require('../validation/validator');

const authController = require('../controller/auth.controller')

/* login */
router.post('/register', validate('userRegistration'), validationErrors, authController.registerUser)
router.post('/login', authController.login)
// router.post('/forgot-password', authController.forgotPassword);

module.exports = router;