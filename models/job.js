const mongoose = require('mongoose');
const { Schema, Decimal128 } = mongoose;

const jobSchema = new Schema({
    name: { type: String, required: true, trim: true },
    department: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    job_type: { type: String, required: true, trim: true, enum: ['remote', 'onsite', 'hybrid'] }, // remote, onsite, hybrid
    description: { type: String, default: '', trim: true },
    job_details: { type: String, default: '', trim: true },
    responsibilities: { type: String, default: '', trim: true },
    experience: { type: Decimal128, default: null },
    location: { type: String, default: '', trim: true },
    status: { type: Number, default: 1, enum: [0, 1] },
}, { timestamps: true });

jobSchema.index({ position: 1 });
jobSchema.index({ entry_date: 1 });
jobSchema.index({ job_type: 1 });

jobSchema.index({ position: 1, status: 1 });
jobSchema.index({ entry_date: 1, status: 1 });
jobSchema.index({ job_type: 1, status: 1 });

module.exports = mongoose.model('jobs', jobSchema);