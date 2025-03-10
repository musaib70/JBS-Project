const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    // _id: { type: Schema.Types.ObjectId },
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    status: { type: Number, default: 1 },
    isAdmin: { type: Number, default: 0 },
    /* data: {
        type: Object
    },
    company_integration_id: {
        type: String,
        ref: 'company_integration'
    }, */
}, { timestamps: true });

userSchema.index({ isAdmin: 1 });
userSchema.index({ status: 1 });

module.exports = mongoose.model('users', userSchema);