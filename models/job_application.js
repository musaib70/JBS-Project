const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobApplicationSchema = new Schema({
    job_id: { type: Schema.Types.ObjectId, ref: 'jobs', as: 'job', index: true },
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    contact: { type: String, required: true },
    resume: { type: String, required: true, trim: true },
    cover_letter: { type: String, default: '', trim: true },
    status: { type: Number, default: 1, enum: [0, 1] },
}, { timestamps: true });

jobApplicationSchema.index({ email: 1 });
jobApplicationSchema.index({ contact: 1 });

jobApplicationSchema.index({ email: 1, status: 1 });
jobApplicationSchema.index({ contact: 1, status: 1 });

module.exports = mongoose.model('job_application', jobApplicationSchema);