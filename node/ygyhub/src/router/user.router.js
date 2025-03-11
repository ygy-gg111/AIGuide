/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:29:37
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-10 22:47:04
 * @FilePath: \ygyhub\src\router\user.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/user' })
const { create } = require('../controller/user.controller')
const { verIfyUer, handlePassword } = require('../middleware/user.middleware')
userRouter.post('/', verIfyUer, handlePassword, create)
userRouter.get('/list', (ctx, next) => {
    ctx.body = {
        code: 200,
        message: '查列表',
        result: '123'
    }
})
module.exports = userRouter
