/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:29:37
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-11 23:34:57
 * @FilePath: \ygyhub\src\router\user.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const momentRouter = new KoaRouter({ prefix: '/moment' })
const { create, } = require('../controller/moment.controller')
// const { verIfyAuth, verifyLogin } = require('../middleware/moment.middleware')
momentRouter.post('/', create)
module.exports = momentRouter



