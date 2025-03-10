const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'post_categories', index: true },
    description: { type: String },
    description_02: { type: String },
    description_03: { type: String },
    meta_description: { type: String },
    meta_data: {
        type: Map,
        of: String,
    },
    tags: [{ type: String }],
    image: { type: String },
    status: { type: Number, default: 1, enum: [0, 1] },
}, { timestamps: true });

postSchema.index({ status: 1 });
postSchema.index({ tags: 1 });

module.exports = mongoose.model('posts', postSchema);