/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-13 23:19:46
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-13 23:38:15
 * @FilePath: \ygyhub\src\service\permission.service.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const connection = require('./database')
class PermissionService {
    async checkResource(resourceName, resourceId, userId) {
        const sql = ` SELECT * FROM ${resourceName} WHERE id = ? AND user_id = ?;`
        const [result] = await connection.execute(sql, [resourceId, userId])
        return !!result.length
    }
}
module.exports = new PermissionService()
