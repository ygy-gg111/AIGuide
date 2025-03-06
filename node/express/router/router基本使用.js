const express = require('express')
const UserRouter = express.Router()

UserRouter.post('/login', (req, res, next) => {
    console.log('进入routerpost')
    const { username, password } = req.body
    if (!username || !password) {
        next(-1001, req, res)
    } else if (username && username != 'admin') {
        next(-1002, req, res)
    } else if (password && password != '123456') {
        next(-1003, req, res)
    }
    if (username === 'admin' && password === '123456') {
        res.json('登录成功')
    }

})
module.exports = UserRouter