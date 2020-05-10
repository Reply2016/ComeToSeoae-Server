const pool = require('../module/pool');
const jwt = require('../module/jwt');

module.exports = {
    signIn: async (id, password) => {

    },
    checkId: async (id) => {
        const table = 'users';
        const query = `SELECT * FROM ${table} WHERE user_userId = '${id}'`;
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
