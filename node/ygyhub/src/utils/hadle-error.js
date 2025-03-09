/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-08 11:23:11
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-08 11:54:22
 * @FilePath: \ygyhub\src\utils\hadle-error.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-08 11:23:11
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-08 11:33:52
 * @FilePath: \ygyhub\src\utils\hadle-error.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { NAME_IS_ALREADY_EXISTS, NAME_OR_PASSWORD_IS_REQUIRED } = require('../config/error-constants')
function handleError(error, ctx) {
    let errorCode = '';
    let message = '';
    switch (error) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            errorCode = -1001
            message = '用户名和密码不能为空'
            break
        case NAME_IS_ALREADY_EXISTS:
            errorCode = -1002
            message = '用户名已经被占用，请输入新的用户名'
            break
        default:
            message = '什么问题'
            break
    }
    ctx.body = { code: errorCode, message }

}
module.exports = {
    handleError
}