const pool = require('../module/pool');

module.exports = {
    // 1. 정보 출력
    getInfo: async (userId) => {
        const table = 'users';
        try {
            const result = await pool.queryParam_None(`SELECT user_userId, user_name, user_nickname, user_phone, user_dept, user_level, user_ranking FROM '${table}' WHERE user_userId = '${userId}'`)
            if (result.code && result.json) return result;
            return {
                code: 200,
                json: {
                    success: true,
                    message: "정보 조회 성공",
                }
            }
        } catch (err) {
            console.log(err);

            return {
                code: 400,
                json: {
                    success: false,
                    message: "정보 조회 실패"
                }
            }
        }
    },
    // 2. 닉네임 변경
    // * 중복 처리 필요
    changeNickname: async (nickname, userId) => {
        const table = 'users';
        try {
            const result = await pool.queryParam_None(`UPDATE ${table} SET user_nickname = '${nickname}' WHERE user_userId = '${userId}`)
            if (result.code && result.json) return result;
            return {
                code: 200,
                json: {
                    success: true,
                    message: "닉네임 변경 성공"
                }
            };
        } catch (err) {
            console.log(err);

            return {
                code: 400,
                json: {
                    success: false,
                    message: "닉네임 변경 실패"
                }
            }
        }
    },
    // 3. 패스워드 변경
    changePassword: async (password, userId) => {
        const table = 'users';
        try {
            const result = await pool.queryParam_None(`UPDATE ${table} SET user_password = '${password}' WHERE user_userId = '${userId}`)
            if (result.code && result.json) return result;
            return {
                code: 200,
                json: {
                    success: true,
                    message: "비밀번호 변경 성공"
                }
            };
        } catch (err) {
            console.log(err);

            return {
                code: 400,
                json: {
                    success: false,
                    message: "비밀번호 변경 실패"
                }
            }
        }
    },
    // 4. 전화번호 변경
    changePhone: async (phone, userId) => {
        const table = 'users';
        try {
            const result = await pool.queryParam_None(`UPDATE ${table} SET user_phone = '${phone}' WHERE user_userId = '${userId}`)
            if (result.code && result.json) return result;
            return {
                code: 200,
                json: {
                    success: true,
                    message: "전화번호 변경 성공"
                }
            };
        } catch (err) {
            console.log(err);

            return {
                code: 400,
                json: {
                    success: false,
                    message: "전화번호 변경 실패"
                }
            }
        }
    },
}
