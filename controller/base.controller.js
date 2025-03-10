/**
 * @author Ahsan Ali
 * @purpose base controller for crud operations
 */
const { ObjectId } = require('mongodb');
const fs = require('fs');
const http_response = require('../helpers/http_response')
const helper = require('../helpers/helper')

module.exports = class BaseController {

    constructor(model) {
        this.model = model
    }

    async list(req, res) {
        try {
            const { filters, filters_in, filters_like, perpage = 20, page = 1, fields, reference, reference_id } = req.query;

            // parse filter types
            const parseFilters = (filter_string, parseFn) => {
                if (!filter_string) return {};
                return filter_string
                    .split(',')
                    .map(filter => filter.split(':'))
                    .filter(([key, value]) => key && value)
                    .reduce((acc, [key, value]) => {
                        acc[key.trim()] = parseFn(value.trim());
                        return acc;
                    }, {});
            }

            // for filters in
            const parseInFilters = (filter_string) => {
                return filter_string?.split('|').map(val => (ObjectId.isValid(val) ? new ObjectId(val) : val.trim()));
            };

            // build query object
            const query = {
                ...parseFilters(filters, value => (ObjectId.isValid(value) ? new ObjectId(value) : value)),
                ...parseFilters(filters_in, value => ({ $in: parseInFilters(value) })),
                ...parseFilters(filters_like, value => ({ $regex: value, $options: 'i' }))
            };

            // options for pagination
            /* const options = {
                sort: { created_at: -1 },
                skip: (Number(page) - 1) * Number(perpage),
                limit: Number(perpage),
            }; */

            // parse reference for populate data
            const populate_data = reference?.split(',') || [];
            const lookups = helper.createLookups(populate_data, reference_id)

            // for reference data and fields
            const add_reference = populate_data.reduce((acc, field) => {
                acc[field] = { $arrayElemAt: [`$${reference}`, 0] };
                return acc;
            }, {});

            // specific fields
            const select_fields = fields?.split(',').reduce((acc, field) => {
                acc[field.trim()] = 1; // Include fields for projection
                return acc;
            }, {}) || {};

            const pipeline = [
                ...lookups,
                { $match: query },
                { $addFields: add_reference },
                ...(fields ? [{ $project: select_fields }] : []),
                {
                    $facet: {
                        metadata: [{ $count: 'totalDocuments' }],
                        data: [
                            // { $sort: { createdAt: -1 } },
                            { $skip: (Number(page) - 1) * Number(perpage) },
                            { $limit: Number(perpage) }
                        ]
                    }
                }
            ];

            /* populate_data.forEach(field => {
                pipeline[pipeline.length - 1].$addFields[field] = { $arrayElemAt: [`$${field}`, 0] };
            }); */

            const results = await this.model.aggregate(pipeline);

            const totalCount = results[0]?.metadata[0]?.totalDocuments || 0;
            const documents = results[0]?.data || [];

            res.setHeader('x-per-page', perpage);
            res.setHeader('x-current-page', page);
            res.setHeader('x-total-count', totalCount);
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header('Access-Control-Expose-Headers', 'x-total-count,x-current-page,x-per-page');
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.setHeader('Access-Control-Allow-Headers', 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token, x-session-id, user-id');
            res.setHeader('Access-Control-Allow-Origin', '*');

            return http_response.success(res, documents)
        } catch (err) {
            console.error(err)

            return http_response.error(res, err.message)
        }
    }

    /**
     * create data
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async create(req, res) {
        try {
            const data = new this.model(req.body);
            await data.save();

            return http_response.success(res, data)
        } catch (err) {
            return http_response.error(res, err.message)
        }
    }

    /**
     * edit/show data
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async edit(req, res) {
        try {
            let data = await this.model.findById(req.params.id);

            if (req.query.reference) {

                const populate = [];

                // add the reference fields to populate
                populate.push({
                    path: req.query.reference,
                    select: req.query.reference_fields || '',
                });

                // populate the data
                data = await data.populate(populate);
            }

            if (!data) return http_response.notFound(res, 'not found')

            return http_response.success(res, data)
        } catch (err) {
            return http_response.error(res, err.message)
        }
    }

    /**
     * update data
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async update(req, res) {
        try {
            const body = req.body;

            if (!req.query.id) return http_response.validationError(res, 'ID is required');

            const data = await this.model.findById(req.query.id);
            if (!data) return http_response.validationError(res, 'Invalid ID')

            Object.assign(data, body);
            await data.save();

            return http_response.success(res, data)
        } catch (err) {
            return http_response.error(res, err.message)
        }
    }

    /**
     * delete data
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async delete(req, res) {
        try {
            const data = await this.model.findById(req.params.id);
            if (!data) return http_response.validationError(res, 'Invalid ID')

            // remove existing file if exists
            if (data.image) {
                fs.unlink(`public/${data.image}`, (err) => {
                    console.log(err);
                    if (err) console.error('existing resume not able to delete');
                });
            }

            if (data.resume) {
                fs.unlink(`public/${data.resume}`, (err) => {
                    console.log(err);
                    if (err) console.error('existing resume not able to delete');
                });
            }

            await data.deleteOne();

            return http_response.success(res, { message: 'data has been deleted' })
        } catch (err) {
            console.log(err);
            return http_response.error(res, err.message)
        }
    }

    /**
     * duplicate data
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async duplicate(req, res) {
        try {
            if (!req.body.id) return http_response.validationError(res, 'ID is request')

            const data = await this.model.findById(req.body.id);
            if (!data) return http_response.validationError(res, 'Invalid ID')

            const duplicate = data.toObject();
            delete duplicate._id;

            await this.model.create(duplicate);

            return http_response.success(res, duplicate)
        } catch (err) {
            console.log(err);
            return http_response.error(res, err.message)
        }
    }
}
