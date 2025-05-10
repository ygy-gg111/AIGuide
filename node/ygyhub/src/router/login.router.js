/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:29:37
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-10 23:29:20
 * @FilePath: \ygyhub\src\router\user.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const loginRouter = new KoaRouter({ prefix: '/login' })
const { sign, demo } = require('../controller/login.controller')
const { verIfyAuth, verifyLogin } = require('../middleware/login.middleware')
loginRouter.post('/', verifyLogin, sign)
loginRouter.get('/demo', verIfyAuth, demo)
module.exports = loginRouter
