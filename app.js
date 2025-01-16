const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
const authMiddleware = require('./middleware/auth')
const cookieParser = require('cookie-parser')
// const bodyParser = require('body-parser') test
const cors = require('cors')
const connectDB = require('./config/db');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

console.log("------ APPJS -------")
// connect mongoDB
connectDB();

// graceful shutdown
const gracefulShutdown = async (signal) => {
    console.log(`Received ${signal}. Closing MongoDB connection...`);
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
};
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

// middlewares setup
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(cookieParser())
app.use(cors())

// for angular pages
// app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'public')));

var settingRoutes = () => {
    console.log('----- in routes');
    let indexRouter = require('./routes/index')
    let authRouter = require('./routes/auth')
    let userRouter = require('./routes/user')
    let postRouter = require('./routes/post')
    let postCategoryRouter = require('./routes/post_category')
    let leadFormRouter = require('./routes/lead_forms')
    let jobRouter = require('./routes/job')

    app.use('', indexRouter)
    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/post', postRouter)
    app.use('/post_category', postCategoryRouter)
    app.use('/lead_form', leadFormRouter)
    app.use('/job', jobRouter)
}

try {
    settingRoutes();
} catch (err) {
    console.log('---- setting routes error');
    console.log(err);
    console.log(err.message);
}

// app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route to serve the frontend app for all non-API routes
/* app.get('/api/test', (req, res) => {
  return res.status(200).send('All okay');
}); */

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

module.exports = app
