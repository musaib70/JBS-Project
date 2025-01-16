const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '', trim: true },
    position: { type: String, required: true, trim: true },
    applied_for: { type: String, required: true, trim: true },
    entry_date: { type: Date, required: true },
    resume: { type: String, required: true, trim: true },
    status: { type: Number, default: 1, enum: [0, 1] },
}, { timestamps: true });

jobSchema.index({ position: 1 });
jobSchema.index({ entry_date: 1 });

jobSchema.index({ position: 1, status: 1 });
jobSchema.index({ entry_date: 1, status: 1 });

module.exports = mongoose.model('jobs', jobSchema);