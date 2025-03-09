/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 22:37:41
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-08 12:26:58
 * @FilePath: \ygyhub\src\middleware\user.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { findUserName } = require('../../service/user.service')
const { NAME_IS_ALREADY_EXISTS, NAME_OR_PASSWORD_IS_REQUIRED } = require('../config/error-constants')
const { md5password } = require('../utils/md5-password')
async function verIfyUer(ctx, next) {

    const { username, password } = ctx.request.body;
    if (!username || !password) {
        ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
        // ctx.body = {
        //     code: -1001,
        //     message: '用户名和密码不能为空'
        // }
        return
    }
    const usernameExists = await findUserName(username)
    if (usernameExists.length) {
        ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)

        return
    }
    await next()
}

const handlePassword = async (ctx, next) => {
    const { password } = ctx.request.body
    ctx.request.body.password = md5password(password)
    await next()

}
module.exports = {
    verIfyUer,
    handlePassword
}