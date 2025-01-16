/**
 * @author Ahsan Ali
 * @purpose base controller for crud operations
 */
const fs = require('fs');
const http_response = require('../helpers/http_response')

module.exports = class BaseController {

    constructor(model) {
        this.model = model
    }

    async list(req, res) {
        try {
            const { filters_LIKE, perpage = 20, page = 1, fields } = req.query;

            // parse filters
            const filters = filters_LIKE ? filters_LIKE.split(',').map(filter => filter.trim()) : [];
            const query = filters.reduce((res, filter) => {
                const [key, value] = filter.split(':');
                if (key === "created_at") {
                    const dateValue = new Date(parseInt(value));
                    const startOfDay = new Date(dateValue.toISOString().split('T')[0]);
                    const endOfDay = new Date(startOfDay.getTime() + 86400000);

                    res[key] = { $gte: startOfDay, $lte: endOfDay };
                } else {
                    acc[key.trim()] = value.trim();
                }

                return acc;
            }, {});

            // parse fields for population
            const populateFields = fields ? fields.split(',') : [];

            // options for pagination
            /* const options = {
                sort: { created_at: -1 },
                skip: (Number(page) - 1) * Number(perpage),
                limit: Number(perpage),
            }; */

            const lookups = populateFields.map(field => ({
                $lookup: {
                    from: `${field}s`,
                    localField: `${field}_id`,
                    foreignField: '_id',
                    as: field
                }
            }));

            const pipeline = [
                ...lookups,
                { $match: query },
                { $addFields: {} }
            ];

            populateFields.forEach(field => {
                pipeline[pipeline.length - 1].$addFields[field] = { $arrayElemAt: [`$${field}`, 0] };
            });

            await this.model.aggregate([...pipeline, { $count: 'totalDocuments' }])
                .then(async countResult => {
                    const totalCount = countResult.length > 0 ? countResult[0].totalDocuments : 0;
                    const documents = await this.model.aggregate(pipeline)
                        .sort({ created_at: -1 })
                        .skip((Number(page) - 1) * Number(perpage))
                        .limit(Number(perpage))

                    documents.map(document => {
                        document.created_at ? document.created_at = document.created_at.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '') : document.created_at
                    })

                    res.setHeader('x-per-page', perpage);
                    res.setHeader('x-current-page', page);
                    res.setHeader('x-total-count', totalCount);
                    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
                    res.header('Access-Control-Expose-Headers', 'x-total-count,x-current-page,x-per-page');
                    res.setHeader('Access-Control-Allow-Credentials', true);
                    res.setHeader('Access-Control-Allow-Headers', 'x-requested-with, Content-Type, origin, authorization, accept, client-security-token, x-session-id, user-id');
                    res.setHeader('Access-Control-Allow-Origin', '*');

                    return http_response.success(res, documents)
                })
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
