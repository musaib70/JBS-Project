
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')
const { validate, validationErrors } = require('../validation/validator');

const jobApplicationController = require('../controller/job_application.controller')

router.get('/list', authMiddleware, jobApplicationController.list.bind(jobApplicationController))
router.post('/create', authMiddleware, validate('jobApplicationCreation'), validationErrors, jobApplicationController.createJobApplication)
router.put('/update', authMiddleware, validate('jobApplicationCreation'), validationErrors, jobApplicationController.updateJobApplication)
router.delete('/delete/:id', authMiddleware, jobApplicationController.delete.bind(jobApplicationController))
router.get('/edit/:id', authMiddleware, jobApplicationController.edit.bind(jobApplicationController))

module.exports = router;