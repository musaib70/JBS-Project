const express = require('express');
const dotenv = require('dotenv');
const path = require('path')
const authMiddleware = require('./middleware/auth')
const cookieParser = require('cookie-parser')
const multer = require('multer')
// const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db');
const mongoose = require('mongoose');

const fs = require('fs');
dotenv.config();
const app = express();

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

// handle files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    },
});

app.use(multer({ storage }).any());

// middlewares setup
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false }))
app.use(cookieParser())

app.use(express.static(path.join(__dirname, 'public')))

// for angular pages
// app.use(express.static(path.join(__dirname, 'static')))
// app.use(express.static('static'));

app.use(cors())

// for image
app.get('/uploads/:folder/:filename', (req, res) => {
    const { folder, filename } = req.params; // Correctly extract folder & filename
    const imagePath = path.join(__dirname, 'public', 'uploads', folder, filename);

    console.log('-----------');
    console.log('----------- image path');
    console.log(imagePath);

    // check if the file exists before sending
    if (fs.existsSync(imagePath)) {
        return res.sendFile(imagePath);
    } else {
        return res.status(404).send('Image not found');
    }
});

/* app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.text({ limit: '50mb' })) */


/* app.use(async (req, res, next) => {
    let auth_bypass = ['/cron/', '/csv/'];
    auth_bypass.find(url => req.url.includes(url))

    if (auth_bypass.find(url => req.url.includes(url))) {
        next();
    }
    else if (req.query.db) {
        LOGGER.info('selected DB');
        LOGGER.info(req.query.db);
        let tenant = Constants.tenants.find(x => x.name == req.query.db);
        LOGGER.info(Constants.tenants);
        LOGGER.info(tenant);
        if (tenant) {
            req.query.DB = tenant.db_name ? tenant.db_name : tenant.name;
            LOGGER.info(req.query.DB)
            next()
        } else {
            return res.status(401).send({ auth: false, message: 'DB not found.' });
        }
    } else {
        next()
    }
}) */

var settingRoutes = () => {
    let indexRouter = require('./routes/index')
    let authRouter = require('./routes/auth')
    let userRouter = require('./routes/user')
    let postRouter = require('./routes/post')
    let postCategoryRouter = require('./routes/post_category')
    let leadFormRouter = require('./routes/lead_forms')
    let jobRouter = require('./routes/job')
    let jobApplicationRouter = require('./routes/job_application')

    app.use('/', indexRouter)
    app.use('/auth', authRouter)
    app.use('/user', userRouter)
    app.use('/post', postRouter)
    app.use('/post_category', postCategoryRouter)
    app.use('/lead_form', leadFormRouter)
    app.use('/job', jobRouter)
    app.use('/job_application', jobApplicationRouter)
}

try {
    settingRoutes();
} catch (err) {
    console.log(err.message);
}

module.exports = app
