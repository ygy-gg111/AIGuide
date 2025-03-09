/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:09:26
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-07 00:27:54
 * @FilePath: \ygyhub\src\config\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let dotenv = require('dotenv')
dotenv.config()
console.log(process.env.SERVER_PORT)
module.exports = {
    SERVER_PORT
} = process.env
