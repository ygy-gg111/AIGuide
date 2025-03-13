/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 22:37:41
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-12 22:32:46
 * @FilePath: \ygyhub\src\middleware\user.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { findUserName } = require('../service/user.service')
const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRECT, UNAUTHORIZATION } = require('../config/error-constants')
const { md5password } = require('../utils/md5-password')
const { Public_KEY } = require('../config/screct')
const jwt = require('jsonwebtoken')
async function verifyLogin(ctx, next) {
    // 1获取用户账号和密码
    const { username, password } = ctx.request.body;
    if (!username || !password) {
        ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
        return
    }
    // 2判断用户是否在库中，如果不是，提示用户未注册
    const user = await findUserName(username)
    if (!user) {
        ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx)
        return
    }

    // 3判断密码是否正确，如果错误，提示密码错误
    const userInfo = user[0]
    if (userInfo.password != md5password(password)) {
        ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
        return
    }
    ctx.user = userInfo
    // 4如果正确，生成token,把用户信息保存下去，并且把token返回给客户端 
    // 这一步在contoller中操作



    await next()
}

const verIfyAuth = async (ctx, next) => {
    const authorization = ctx.headers.authorization
    if (!authorization) {
        ctx.app.emit('error', UNAUTHORIZATION, ctx)
        return
    }
    const token = authorization.replace('Bearer ', '')
    try {
        const result = jwt.verify(token, Public_KEY, {
            algorithms: ['RS256']
        })
        ctx.user = result
        await next()
    } catch (err) {
        ctx.app.emit('error', UNAUTHORIZATION, ctx)
        return
    }





}
module.exports = {
    verifyLogin,
    verIfyAuth
}