/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 22:51:06
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-27 23:48:18
 * @FilePath: \AIGuide\node\express\04express中响应.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express()
const UserRouter = require('./router/router基本使用')
// 在这个写中间件回越来越多，我们可以使用路由进行
app.use('/', UserRouter)
// app.get()
app.listen(7177)
