const mongoose = require('mongoose');
const { Schema } = mongoose;

const leadFormsSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    service: { type: String, trim: true },
    date: { type: Date, required: true, trim: true },
    address: { type: String },
    status: { type: Number, default: 1, enum: [0, 1] },
    comments: { type: String, default: '', trim: true },
}, { timestamps: true });

leadFormsSchema.index({ email: 1 });
leadFormsSchema.index({ phone: 1 });
leadFormsSchema.index({ service: 1 });
leadFormsSchema.index({ date: 1 });

leadFormsSchema.index({ email: 1, service: 1 });
leadFormsSchema.index({ phone: 1, service: 1 });
leadFormsSchema.index({ date: 1, service: 1 });

module.exports = mongoose.model('lead_forms', leadFormsSchema);