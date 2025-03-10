const jwt = require('jsonwebtoken')
const CONSTANTS = require('../config/constants')

module.exports = {

    /**
     * get current date with extend years, months and days
     * @param {integer} add_year 
     * @param {integer} add_month 
     * @param {integer} add_day 
     * @returns string as date
     */
    currDate: (add_year = 0, add_month = 0, add_day = 0) => {
        let cd = new Date();

        return new Date(cd.getFullYear() + add_year, cd.getMonth() + add_month, cd.getDate() + add_day);
    },

    /**
     * generate random integers number
     * @param {integer} min 
     * @param {integer} max 
     * @returns integer 
     */
    generateRandomNumber: (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * get origin from http headers
     * @param {object} req
     * @returns string
     */
    getRequestHeaderOrigin(req) {
        let host = req.headers.origin ? new URL(req.headers.origin).hostname : 'invalid';
        return host;
    },

    /**
     * get token from header
     * @param {object} req
     * @returns string
     */
    getTokenFromHeader(req) {
        const token = req.headers.authorization
        const decoded = jwt.verify(token[1], CONSTANTS.secret)
        if (!decoded) reject(new Error('Unauthorized/ Invalid Token'))

        return decoded
    },

    /** 
     * get model by entity
     * @param {string} reference 
     * @returns Model object
     */
    createLookups: (references, reference_id = false) => {
        return references.map(reference => ({
            $lookup: {
                from: `${reference}`,
                localField: reference_id ? reference_id : `${reference}_id`,
                foreignField: '_id',
                as: `${reference}`
            }
        }));
    },
}