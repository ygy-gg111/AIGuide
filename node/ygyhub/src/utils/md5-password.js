/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-08 12:20:30
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-08 12:24:12
 * @FilePath: \ygyhub\src\utils\md5-password.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const crypto = require('crypto')
function md5password(password) {
    const md5 = crypto.createHash('md5')
    password = String(password)
    const md5password = md5.update(password).digest('hex')
    return md5password
}
module.exports = {
    md5password
}