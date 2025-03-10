/**
 * @auther Ahsan Ali
 * @purpose post controller
 */
const BaseController = require('./base.controller');

// libs
const fs = require('fs');
const path = require('path');

// models
const Post = require('../models/post');
const PostCategory = require('../models/post_category');

const http_response = require('../helpers/http_response');

class PostController extends BaseController {
    constructor() {
        super(Post);
    }

    /**
     * create post and image
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async create(req, res) {
        try {
            let { title, category_id, description, description_02, description_03, meta_description, meta_data, tags, status, image } = req.body;

            // validate category
            const category = await PostCategory.findById(category_id);
            if (!category) return http_response.notFound(res, 'invalid category')

            if (image) {
                const matches = image.match(/^data:image\/(png|jpeg|jpg);base64,(.+)$/);
                if (!matches || matches.length !== 3) {
                    return http_response.error(res, 'Invalid image format. Supported formats: PNG, JPEG.');
                }

                // extract mime type and base64 content
                const [_, mimeType, base64Data] = matches;
                const buffer = Buffer.from(base64Data, 'base64');

                // generate filename
                const extension = mimeType === 'jpeg' ? 'jpg' : mimeType;
                const imageName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${extension}`;

                // directory where image will save
                const uploadDir = path.resolve(__dirname, '../public/uploads/posts');

                // ensure the uploads directory exists inside public
                fs.mkdirSync(uploadDir, { recursive: true });

                // save image file to the folder
                const imagePath = path.join(uploadDir, imageName);
                fs.writeFileSync(imagePath, buffer);

                image = `uploads/posts/${imageName}`
            }

            const post = await Post.create({
                title,
                category_id,
                description,
                description_02,
                description_03,
                meta_description,
                meta_data,
                tags: tags,
                status,
                image: image
            });

            return http_response.success(res, post)
        } catch (err) {
            return http_response.error(res, err.message)
        }
    }

    /**
     * update post and image
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async update(req, res) {
        if (!req.query.id) return http_response.validationError(res, 'ID is required');

        try {
            const get_post = await Post.findById(req.query.id);
            if (!get_post) return http_response.validationError(res, 'Invalid ID')

            let data = req.body;
            let { category_id, image } = req.body;

            // validate post category
            const post_category = await PostCategory.findById(category_id);
            if (!post_category) return http_response.notFound(res, 'invalid post category')

            if (image) {
                const matches = image.match(/^data:image\/(png|jpeg|jpg);base64,(.+)$/);
                if (!matches || matches.length !== 3) {
                    return http_response.error(res, 'Invalid image format. Supported formats: PNG, JPEG.');
                }

                // remove existing file is exists
                if (get_post.image) {
                    fs.unlink(`public/${get_post.image}`, (err) => {
                        console.log(err);
                        if (err) console.error('existing image not able to delete');
                    });
                }

                // extract mime type and base64 content
                const [_, mimeType, base64Data] = matches;
                const buffer = Buffer.from(base64Data, 'base64');

                // generate filename
                const extension = mimeType === 'jpeg' ? 'jpg' : mimeType;
                const imageName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${extension}`;

                // directory where image will save
                const uploadDir = path.resolve(__dirname, '../public/uploads/posts');

                // ensure the uploads directory exists inside public
                fs.mkdirSync(uploadDir, { recursive: true });

                // save image file to the folder
                const imagePath = path.join(uploadDir, imageName);
                fs.writeFileSync(imagePath, buffer);

                data.image = `uploads/posts/${imageName}`
            }

            Object.assign(get_post, data);
            await get_post.save();

            return http_response.success(res, get_post)
        } catch (err) {
            return http_response.error(res, err.message)
        }
    }
}

module.exports = new PostController();