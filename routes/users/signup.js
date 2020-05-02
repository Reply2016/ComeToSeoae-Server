const express = require('express');
const router = express.Router();

// 테스트
router.get('/', (req, res) => {
    const result = {
        status: 200,
        message: 'api 접근 성공',
    }

    res.status(200).send(result);
});

module.exports = router;
