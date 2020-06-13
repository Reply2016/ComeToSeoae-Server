var express = require('express');
var router = express.Router();

// User
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

router.use('/users', require('./users')); // 유저
router.use('/mypage', require('./mypage')); // 마이페이지
module.exports = router;