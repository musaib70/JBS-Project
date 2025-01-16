const mongoose = require('mongoose');
const { Schema } = mongoose;

const postCategorySchema = new Schema({
    name: { type: String, required: true, trim: true },
    status: { type: Number, default: 1, enum: [0, 1] },
}, { timestamps: true });

module.exports = mongoose.model('post_categories', postCategorySchema);