
const express = require('express')
const router = express.Router()

const authMiddleware = require('../middleware/auth')
const { validate, validationErrors } = require('../validation/validator');

const leadFormController = require('../controller/lead_forms.comtroller')

router.get('/list', authMiddleware, leadFormController.list.bind(leadFormController))
router.post('/create', authMiddleware, validate('leadFormCreation'), validationErrors, leadFormController.create.bind(leadFormController))
router.put('/update', authMiddleware, validate('leadFormCreation'), validationErrors, leadFormController.update.bind(leadFormController))
router.delete('/delete/:id', authMiddleware, leadFormController.delete.bind(leadFormController))
router.get('/edit/:id', authMiddleware, leadFormController.edit.bind(leadFormController))

module.exports = router;

