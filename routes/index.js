const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
    console.log('-------');
    // res.render('index', { title: 'Express' })
    res.sendFile('index.html', { root: 'public' });
})

module.exports = router
