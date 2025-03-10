const { body, validationResult } = require('express-validator')

// helpers
const http_response = require('../helpers/http_response')

// constants
const CUM = require('../constants/messages/user.messages')
const CJM = require('../constants/messages/job.message')
const CPM = require('../constants/messages/post.message')
const CPCM = require('../constants/messages/post_catgory.message')
const CLFM = require('../constants/messages/lead_form.message')

exports.validate = (action) => {
    switch (action) {
        case 'userRegistration': {
            return [
                body('name', CUM.nameRS).exists().isString(),
                body('username', CUM.usernameRS).exists().isString(),
                body('email', CUM.emailRV).exists().isEmail(),
                body('password', CUM.passwordRV).exists().isString().isLength({ min: 6 }),
            ]
        }
        case 'jobCreation': {
            return [
                body('name', CJM.nameRS).exists().isString(),
                body('department', CJM.appliedForRS).exists().isString(),
                body('job_type', CJM.entryDateRV).exists().isString(),
                body('position', CJM.positionRS).exists().isString(),
                body('description', CJM.descS).isString(),
                // body('resume', CJM.emailRequired).exists().isString(),
            ]
        }
        case 'jobApplicationCreation': {
            return [
                body('job_id', CPM.jobRV).exists().isString(),
                body('name', CJM.nameRS).exists().isString(),
                body('email', CJM.emailRequired).exists().isString(),
                body('contact', CJM.entryDateRV).exists().isString(),
                body('cover_letter', CJM.descS).isString(),
                body('resume', CJM.emailRequired).exists().isString(),
            ]
        }
        case 'postCatCreation': {
            return [
                body('name', CPCM.nameR).exists().isString(),
            ]
        }
        case 'postCreation': {
            return [
                body('title', CPM.titleRS).exists().isString(),
                body('category_id', CPM.categoryRV).exists().isString(),
                body('description', CPM.descS).isString(),
                // body('meta_data', CPM.metaDescS).isObject(),
                body('tags', CPM.tagsArr).isArray({ min: 1, max: 10 }),
                body('image', CPM.imageRV).optional().isString(),
            ]
        }
        case 'leadFormCreation': {
            return [
                body('name', CLFM.nameRS).exists().isString(),
                body('email', CLFM.emailRV).exists().isEmail(),
                body('phone', CLFM.phoneRV).exists().isMobilePhone(),
                body('message', CLFM.messageRS).exists().isString(),
                body('service', CLFM.serviceS).isString(),
                // body('date', CLFM.dateRV).exists().isString(),
                body('comments', CLFM.commentS).isString(),
            ]
        }
    }
}

exports.validationErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return http_response.validationError(res, errors.array()[0].msg);

    next();
}