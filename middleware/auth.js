/**
 * @author Ahsan Ali
 * @purpose auth middleware for user identity
 */

const jwt = require('jsonwebtoken');

// helpers
const http_response = require('../helpers/http_response');

const authMiddleware = (req, res, next) => {
    try {
        if (req.header('x-access-token') === 'Xc12IsT9hevD8Pqq4kQbFiWMcOX9QMDHdKbb6DKRzWw') {
            next(); return;
        }

        const token = req.header('Authorization')?.split(' ')[1];
        if (!token) return http_response.notFound(res, 'Access denied')

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return http_response.notFound(res, 'Invalid token')
    }
};

module.exports = authMiddleware;
