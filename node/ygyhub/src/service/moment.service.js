/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:34:59
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-13 23:44:00
 * @FilePath: \ygyhub\service\user.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * 
 */
const connection = require('./database')
class MomentService {
    async create(content, user_id) {
        const sql = `INSERT INTO moments(content,user_id) VALUES(?,?);`
        const [result] = await connection.execute(sql, [content, user_id])
        return result
    }
    async getList(pageSize = 5, pageNo = 0) {
        const sql = `SELECT ms.id, ms.content,ms.createAt,ms.updateAt,JSON_OBJECT('name',us.username,'avatar_url',us.avatar_url)AS user FROM moments ms LEFT JOIN users us ON ms.user_id = us.id LIMIT ? OFFSET ?;`
        try {
            let offset = pageNo * pageSize
            const [result] = await connection.execute(sql, [pageSize, offset.toString()])
            return result
        } catch (err) {
            console.log(err)
        }
    }
    async getMomentById(momentId) {
        const sql = `SELECT ms.id, ms.content,ms.createAt,ms.updateAt,JSON_OBJECT('name',us.username,'avatar_url',us.avatar_url)AS user FROM moments ms LEFT JOIN users us ON ms.user_id = us.id WHERE ms.id = ?;`
        const [result] = await connection.execute(sql, [momentId])
        return result
    }
    async update(content, momentId) {
        const sql = `UPDATE moments SET content = ? WHERE id = ?;`
        const [result] = await connection.execute(sql, [content, momentId])
        return result
    }
    async remove(momentId) {
        const sql = ` DELETE FROM moments WHERE id = ?;`
        const [result] = await connection.execute(sql, [momentId])
        return result
    }
}
module.exports = new MomentService()
