const User = require('../models/userModel');
const express = require('express');

module.exports = {
    // 1. 회원가입
    signUp: async (req, res) => {
        const {
            userId,
            password,
            name,
            nickname,
            phone,
            dept
        } = req.body;

        // 입력되지 않은 값이 있다면
        if (!userId || !password || !name || !nickname || !phone || !dept) {
            return await res.status(400).send({
                message: "Bad Request"
            });
        }

        const checkIdResult = await User.checkId(userId);
        // ID 가 중복이라면
        if (!checkIdResult) {
            return await res.status(400).send({
                message: "Bad Request"
            });
        }

        try {
            console.log("success");
        } catch (err) {
            console.log(err);
            return await res.status(400).send({
                message: "Bad Reqeust"
            });
        }
    },
    // 2. 로그인
    signIn: async (req, res) => {
        const {
            userId,
            password,
            token
        } = req.body

        if (!userId || !password) {
            return await res.status(400).send({
                message: "Bad Request"
            });
        }

        try {
            console.log("success");
        } catch (err) {
            console.log(err);
            return await res.status(400).send({
                message: "Bad Reqeust"
            });
        }
    },
    // 3. ID 중복 체크
    checkId: async (req, res) => {
        const { userId } = req.body
        if (userId === undefined) {
            res.status(400).send({
                message: "Bad Request"
            });
            return;
        }
        const checkIdResult = await User.checkId(userId);
        if (checkIdResult === false) {
            res.status(400).send({
                message: "이미 사용중인 ID입니다"
            });
            return;
        }
        return res.status(200).send({
            message: "사용가능한 ID입니다"
        });
    }
}