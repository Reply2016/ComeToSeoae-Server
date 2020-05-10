const pool = require('../module/pool');
const jwt = require('../module/jwt');

module.exports = {
    signUp: async (userId, password, name, nickname, phone, dept) => {
        const table = 'users';
        const fields = 'user_userId, user_password, user_name, user_nickname, user_phone, user_dept, user_level, user_ranking';
        const questions = `?, ?, ?, ?, ?, ?, ?, ?`;
        const values = [userId, password, name, nickname, phone, dept, 1, 0];
        try {
            const result = await pool.queryParam_Arr(`INSERT INTO ${table}(${fields}) VALUES (${questions})`, values);
            if (result) {
                return {
                    code: 200,
                    json: {
                        success: true,
                        message: "회원가입 성공",
                        data: userId
                    }
                };
            }
            else {
                return {
                    code: 400,
                    json: {
                        success: false,
                        message: "테스트 실패",
                        data: userId
                    }
                }
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    signIn: async (userId, password) => {

    },
    checkId: async (userId) => {
        const table = 'users';
        const query = `SELECT * FROM ${table} WHERE user_userId = '${userId}'`;
        return await pool.queryParam_None(query)
            .then(async (userResult) => {
                if (userResult.length == 0) return true;
                else return false;
            })
            .catch(err => {
                console.log(err);
                throw err;
            })
    },
}
