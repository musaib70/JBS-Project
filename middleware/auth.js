/**
 * @author Ahsan Ali
 * @purpose auth middleware for user identity
 */

const jwt = require('jsonwebtoken');

// helpers
const http_response = require('../helpers/http_response');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) return http_response.notFound(res, 'Access denied')

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return http_response.notFound(res, 'Invalid token')
    }
};

module.exports = authMiddleware;
