const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://ahsans895:ahsan11@jbs-consulting-backend.l5ikm.mongodb.net/?retryWrites=true&w=majority&appName=jbs-consulting-backend');

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('------------------------')
        console.error(`Mongo connection Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
