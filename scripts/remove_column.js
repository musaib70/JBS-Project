
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const Job = require('../models/job');

async function removeColumn() {
    try {
        require('dotenv').config();

        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not defined in the environment variables.');
            process.exit(1);
        }

        await connectDB();

        const fieldsToRemove = ['applied_for', 'entry_date', 'resume'];

        const unsetFields = fieldsToRemove.reduce((acc, field) => {
            acc[field] = '';
            return acc;
        }, {});

        const result = await Job.updateMany({}, { $unset: unsetFields }, { strict: false });

        console.log(`Removed fields ${fieldsToRemove.join(', ')} from ${result.modifiedCount} documents.`);
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
};

/**
 * reorder columns
 */
async function reOrderColumn() {
    try {
        require('dotenv').config();

        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not defined in the environment variables.');
            process.exit(1);
        }

        await connectDB();

        const jobs = await Job.find({});

        for (const job of jobs) {
            const reorderedJob = {
                name: job.name,
                department: job.department,
                position: job.position,
                job_type: job.job_type,
                description: job.description,
                job_details: job.job_details,
                responsibilities: job.responsibilities,
                experience: job.experience,
                location: job.location,
                status: job.status,
                createdAt: job.createdAt,
                updatedAt: job.updatedAt,
            };

            await Job.updateOne({ _id: job._id }, reorderedJob);
        }

        console.log('Field added and reordered successfully!');
    } catch (err) {
        console.error('Error:', err);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
};

removeColumn()
// reOrderColumn()