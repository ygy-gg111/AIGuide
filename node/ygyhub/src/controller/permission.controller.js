/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-13 23:12:39
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-13 23:39:31
 * @FilePath: \ygyhub\src\controller\permission.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { checkResource } = require('../service/permission.service')
const { NO_OPERATION_PERMISSION } = require('../config/error-constants')
const verifyPermission = async (ctx, next) => {
    // 这个权限中间件需要适配多个接口，所以先获取{key,value} key就是表名加id,value就是参数
    const keyName = Object.keys(ctx.params)[0]
    const resourceId = ctx.params[keyName]
    const resourceName = keyName.replace('Id', '')

    const { id } = ctx.user
    console.log(resourceName, resourceId, id)
    const isPermission = await checkResource(resourceName, resourceId, id)
    console.log(isPermission)
    if (!isPermission) {
        return ctx.app.emit('error', NO_OPERATION_PERMISSION, ctx)
    }
    await next()

}
module.exports = {
    verifyPermission
}
