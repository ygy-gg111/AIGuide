/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-11 23:25:08
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-12 22:25:46
 * @FilePath: \ygyhub\src\middleware\moment.middleware.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const { CONTENT_IS_REQUIRED } = require('../config/error-constants')
const verIfyContent = async (ctx, next) => {
    const { content } = ctx.request.body
    if (!content) {
        return ctx.app.emit('error', CONTENT_IS_REQUIRED, ctx)
    }
    await next()
}
module.exports = {
    verIfyContent
}
