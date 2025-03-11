/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:34:59
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-07 22:46:05
 * @FilePath: \ygyhub\service\user.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
const connection = require('./database')
class UserService {
    async create(body) {
        const { username, password } = body
        const sql = `INSERT INTO users (username,password) VALUES (?,?);`
        const [result] = await connection.execute(sql, [username, password])
        return result
    }
    async findUserName(username) {
        const sql = `SELECT * FROM  users WHERE username = ?`
        const [result] = await connection.execute(sql, [username])
        return result
    }
}
module.exports = new UserService()
