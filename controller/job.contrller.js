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
            const { resume } = req.body

            if (resume) {

                // directory where image will save
                const uploadDir = path.resolve(__dirname, '../public/uploads/resume');
                if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

                // const fileType = fileName.split('.').pop(); // Get file extension
                const attachment_type = data.attachment_type ? data.attachment_type : '.docx';
                const fileName = `${Date.now()}-${data.name.toLowerCase().replace(/\s+/g, '-')}${attachment_type}`;
                const filePath = path.join(uploadDir, fileName);
                const fileBuffer = Buffer.from(resume, 'base64');

                // save image file to the folder
                fs.writeFileSync(filePath, fileBuffer);

                data.resume = `uploads/resume/${fileName}`
            }

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
            const { resume } = req.body
            
            if (!req.query.id) return http_response.validationError(res, 'ID is required');

            const job = await Job.findById(req.query.id);
            if (!job) return http_response.validationError(res, 'Invalid ID')
                
            if (resume) {

                // remove file if exists
                if (job.resume) {
                    fs.unlink(`public/${job.resume}`, (err) => {
                        if (err) console.error('existing resume not able to delete');
                    });
                }

                // directory where resume will save
                const uploadDir = path.resolve(__dirname, '../public/uploads/resume');
                if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

                const attachment_type = data.attachment_type ? data.attachment_type : '.docx';
                const fileName = `${Date.now()}-${data.name.toLowerCase().replace(/\s+/g, '-')}${attachment_type}`;
                const filePath = path.join(uploadDir, fileName);
                const fileBuffer = Buffer.from(resume, 'base64');

                // save image file to the folder
                fs.writeFileSync(filePath, fileBuffer);

                data.resume = `uploads/resume/${fileName}`
            }

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