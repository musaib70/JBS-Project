
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')
const { validate, validationErrors } = require('../validation/validator');

const postController = require('../controller/post.controller')

router.get('/list', authMiddleware, postController.list.bind(postController))
router.post('/create', authMiddleware, validate('postCreation'), validationErrors, postController.create)
router.put('/update', authMiddleware, validate('postCreation'), validationErrors, postController.update)
router.delete('/delete/:id', authMiddleware, postController.delete.bind(postController))
router.post('/duplicate', authMiddleware, postController.duplicate.bind(postController))
router.get('/edit/:id', authMiddleware, postController.edit.bind(postController))

module.exports = router;