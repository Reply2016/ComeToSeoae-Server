const pool = require('../module/pool');
const jwt = require('../module/jwt');
const { throw } = require('../config/dbConfig');

module.exports = {
    // 1. 회원가입
    signUp: async (userId, password, name, nickname, phone, dept) => {
        const table = 'users';
        const fields = 'user_userId, user_password, user_name, user_nickname, user_phone, user_dept, user_level, user_ranking';
        const questions = `?, ?, ?, ?, ?, ?, ?, ?`;
        const values = [userId, password, name, nickname, phone, dept, 1, 0];
        try {
            query = `INSERT INTO ${table}(${fields}) VALUES (${questions})`;
            const result = await pool.queryParam_Arr(query, values);
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
                        message: "회원가입 실패",
                        data: userId
                    }
                }
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    },
    // 2. 로그인
    signIn: async (userId, password) => {
        const table = 'users';
        const query = `SELECT * FROM ${table} WHERE userId = '${userId}'`;

        return await pool.queryParam_None(query)
            .then(async (userResult) => {
                if (userResult.length == 0) {
                    return {
                        code: 400,
                        json: {
                            success: false,
                            message: "로그인 실패"
                        }
                    };
                }
                const user = userResult[0];
                const { hashed } = await encrypt.encryptWithSalt(password, user.salt);
                const { token } = jwt.sign(user);
                if (user.userPw != hashed) {
                    return {
                        code: 400,
                        json: {
                            success: false,
                            message: "PW 미일치"
                        }
                    };
                }
                return {
                    code: 200,
                    json: {
                        success: true,
                        message: "로그인 성공"
                    }
                }
            })
            .catch(err => {
                console.log(err);
                throw (err);
            });
    },
    // 3. 아이디 중복체크
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
