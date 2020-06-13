var express = require('express');
var router = express.Router();
const receiptController = require('../controller/receiptController');

router.post('/saveReceipts', receiptController.saveReceipts); // 영수증 저장

module.exports = router;