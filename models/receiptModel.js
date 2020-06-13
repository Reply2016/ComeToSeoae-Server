const pool = require('../module/pool');

module.exports = {
    // 1. 영수증 저장
    saveReceipts: async (userId, store_id, receipt_number, receipt_pay) => {
        const table = 'receipts';
        const fields = 'user_userId, store_id, receipt_number, receipt_pay';
        const questions = `?, ?, ?, ?, ?, ?, ?, ?`;
        const values = [userId, store_id, receipt_number, receipt_pay];

        try {
            query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;
            const result = await pool.queryParam_Arr(query, values);

            if (result) {
                return {
                    code: 200,
                    json: {
                        success: true,
                        message: "영수증 저장 성공",
                        data: userId
                    }
                };
            }
            else {
                return {
                    code: 400,
                    json: {
                        success: false,
                        message: "영수증 저장 실패",
                        data: userId
                    }
                }
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
}
