/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 23:54:44
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-28 00:18:58
 * @FilePath: \AIGuide\node\express\router\userRouter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const LoginRouter = express.Router()

LoginRouter.post('/login', (req, res, next) => {
    console.log('进入routerpost')
    const { username, password } = req.body
    console.log(req.body)
    if (!username || !password) {
        next(-1001)
    } else if (username && username != 'admin') {
        next(-1002)
    } else if (password && password != '123456') {
        next(-1003)
    }
    if (username === 'admin' && password === '123456') {
        res.json('登录成功')
    }

})
module.exports = LoginRouter