const express = require('express');
const router = express.Router();

// User
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/users', require('./users/users_index'));
router.use('/stores', require('./stores/stores_index'));

module.exports = router;