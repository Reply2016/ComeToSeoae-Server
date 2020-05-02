var express = require('express');
var router = express.Router();

// 회원가입
router.use('/signup', require('./signup'));

// 로그인
//router.use('/signin', require('./signin'));

// 아이디 중복 검사
//router.use('/checkId', require('./checkId'));

module.exports = router;