var express = require('express');
var router = express.Router();
const mypageController = require('../controller/mypageController');

router.get('', mypageController.getInfo); // 정보 출력
router.post('/changeNickname', mypageController.changeNickname) // 닉네임 수정
router.post('/changePassword', mypageController.changePassword) // 패스워드 수정
router.post('/changeNumber', mypageController.changeNumber) // 전화번호 수정 

module.exports = router;