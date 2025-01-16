/**
 * @auther Ahsan Ali
 * @purpose user controller
 */
const BaseController = require('./base.controller');
const User = require('../models/user');

class UserController extends BaseController {
    constructor() {
        super(User);
    }
}

module.exports = new UserController();
