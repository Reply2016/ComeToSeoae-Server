const mypage = require('../models/mypageModel');
const express = require('express');

module.exports = {
    // 1. 정보 출력
    getInfo: async (req, res) => {
        const { userId } = req.body;

        if (!userId) {
            return await res.status(400).send({
                message: "Bad Reqeust"
            });
        }

        try {
            const { code, json } = await mypage.getInfo(userId);
            res.status(code).send(json)
        } catch (err) {
            return await res.status(400).send({
                message: "Bad Request"
            })
        }
    },
    // 2. 닉네임 수정
    changeNickname: async (req, res) => {
        const { userIdx: userId, nickname } = req.body;

        // 닉네임 없을 시 오류
        if (!nickname) {
            return await res.status(400).send({
                message: "Bad Reqeust"
            });
        }

        try {
            const { code, json } = await mypage.changeNickname(nickname, userId);
            res.status(code).send(json);
        } catch (err) {
            await res.status(400).send({
                message: "Bad Request"
            });
        }
    },
    // 3. 패스워드 수정
    changePassword: async (req, res) => {
        const { userId, password } = req.body;

        // 패스워드 없을 시 오류
        if (!password) {
            return await res.status(400).send({
                message: "Bad Reqeust"
            });
        }

        try {
            const { code, json } = await mypage.changeNickname(password, userId);
            res.status(code).send(json);
        } catch (err) {
            await res.status(400).send({
                message: "Bad Request"
            });
        }
    },

    // 4. 전화번호 수정
    changeNumber: async (req, res) => {
        const { userId, phone } = req.body;

        // 전화번호 없을 시 오류
        if (!phone) {
            return await res.status(400).send({
                message: "Bad Reqeust"
            });
        }

        try {
            const { code, json } = await mypage.changeNickname(phone, userId);
            res.status(code).send(json);
        } catch (err) {
            await res.status(400).send({
                message: "Bad Request"
            });
        }
    },
}