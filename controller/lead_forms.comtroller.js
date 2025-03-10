/**
 * @auther Ahsan Ali
 * @purpose lead forms controller
 */
const BaseController = require('./base.controller');
const LeadFrom = require('../models/lead_forms');
const http_response = require('../helpers/http_response');

class LeadFormController extends BaseController {
    constructor() {
        super(LeadFrom);
    }

    /**
     * create a lead form
     * @param {*} req
     * @param {*} res
     * @returns
     */
    async create(req, res) {
        try {
            const data = new LeadFrom(req.body);
            data.date = new Date();

            await data.save();

            return http_response.success(res, data)
        } catch (err) {
            console.log(err);
            return http_response.error(res, err.message)
        }
    }
}

module.exports = new LeadFormController();
