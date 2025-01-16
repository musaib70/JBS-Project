/**
 * @auther Ahsan Ali
 * @purpose post category controller
 */
const BaseController = require('./base.controller');
const PostCategory = require('../models/post_category');

class PostCategoryController extends BaseController {
    constructor() {
        super(PostCategory);
    }
}

module.exports = new PostCategoryController();
