const jwt = require('jsonwebtoken');
const secretKey = require('../config/secretKey.js');

module.exports = {
    sign: function(id) {
        const options ={
            algorithm: "HS256",
            expiresIn: 60 * 60 * 24 * 30 // 30일
        };
        const payload = {
            "id" : id
        };
        let token = jwt.sign(payload,secretKey,options);
        return token;
    },

    verify: function(id) {
        let decoded;
        try{
            decoded = jwt.verify(token,secretKey)
        } catch(err){
            if(err.message === 'jwt expired'){
                console.log('expired token');
            }
            else if(err.message === 'invalid token'){
                console.log('invalid token');
            }
            else {
                console.log('invalid token');
            }
        }
        return decoded;
    },   
}