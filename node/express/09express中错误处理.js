/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 22:51:06
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-28 00:21:53
 * @FilePath: \AIGuide\node\express\04express中响应.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')

const {
    GetErr
} = require('./middle/err')
const LoginRouter = require('./router/userRouter')
console.log(GetErr)
const app = express()
// app.get()
app.use(express.json())
app.use('/', LoginRouter)
app.use(GetErr)

app.listen(7177)
