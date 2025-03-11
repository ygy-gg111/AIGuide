/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 19:16:06
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-11 23:08:01
 * @FilePath: \ygyhub\src\app\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const { handleError } = require('../utils/hadle-error')
const bodyParams = require('koa-bodyparser')
const registerRouter = require('../router/index')
const app = new Koa()

app.use(bodyParams())
app.on('error', handleError)
// 自动引入router
registerRouter(app)
module.exports = app  