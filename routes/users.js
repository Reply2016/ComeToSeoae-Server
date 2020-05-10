var express = require('express');
var router = express.Router();
const UserController = require('../controller/userController');

router.post('/signUp', UserController.signUp);
router.post('/signIn', UserController.signIn);
router.get('/checkId', UserController.checkId);

module.exports = router;