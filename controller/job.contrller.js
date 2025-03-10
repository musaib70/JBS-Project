/**
 * @auther Ahsan Ali
 * @purpose job controller
 */
const BaseController = require('./base.controller');

const fs = require('fs');
const path = require('path');

// models
const Job = require('../models/job');

// helpers
const http_response = require('../helpers/http_response');

class JobController extends BaseController {
    constructor() {
        super(Job);
    }

    /**
     * create a job
     * @param {*} req
     * @param {*} res
     * @returns
     */
    async createJob(req, res) {
        try {
            const data = new Job(req.body);

            data.experience = parseFloat(req.body.experience.$numberDecimal);

            await data.save();

            return http_response.success(res, data)
        } catch (err) {
            console.log(err.message);
            return http_response.error(res, err.message)
        }
    }

    /**
     * update a job
     * @param {*} req
     * @param {*} res
     * @returns
     */
    async updateJob(req, res) {
        try {
            const data = req.body

            if (!req.query.id) return http_response.validationError(res, 'ID is required');

            const job = await Job.findById(req.query.id);
            if (!job) return http_response.validationError(res, 'Invalid ID')

            data.experience = parseFloat(data.experience.$numberDecimal);

            Object.assign(job, data);
            await job.save();

            return http_response.success(res, job)
        } catch (err) {
            console.log(err);
            return http_response.error(res, err.message)
        }
    }
}

module.exports = new JobController();
