
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')
const { validate, validationErrors } = require('../validation/validator');

const postCategoryController = require('../controller/post_category.controller')

router.get('/list', authMiddleware, postCategoryController.list.bind(postCategoryController))
router.post('/create', authMiddleware, validate('postCatCreation'), validationErrors, postCategoryController.create.bind(postCategoryController))
router.put('/update', authMiddleware, validate('postCatCreation'), validationErrors, postCategoryController.update.bind(postCategoryController))
router.delete('/delete/:id', authMiddleware, postCategoryController.delete.bind(postCategoryController))
router.get('/edit/:id', authMiddleware, postCategoryController.edit.bind(postCategoryController))

module.exports = router;
