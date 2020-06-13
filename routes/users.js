var express = require('express');
var router = express.Router();
const UserController = require('../controller/userController');

router.post('/signUp', UserController.signUp); // 회원가입
router.post('/signIn', UserController.signIn); // 로그인
router.get('/checkId', UserController.checkId); // ID 중복 확인

module.exports = router;