
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')
const { validate, validationErrors } = require('../validation/validator');

const jobController = require('../controller/job.contrller')

router.get('/list', authMiddleware, jobController.list.bind(jobController))
router.post('/create', authMiddleware, validate('jobCreation'), validationErrors, jobController.createJob)
router.put('/update', authMiddleware, validate('jobCreation'), validationErrors, jobController.updateJob)
router.delete('/delete/:id', authMiddleware, jobController.delete.bind(jobController))
router.get('/edit/:id', authMiddleware, jobController.edit.bind(jobController))

module.exports = router;