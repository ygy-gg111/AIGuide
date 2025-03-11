/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-11 23:22:05
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-11 23:27:50
 * @FilePath: \ygyhub\src\controller\moment.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
class MomentController {
    async create(ctx, next) {
        ctx.body = {
            code: 200,
            message: '创建动态'
        }
    }
}
module.exports = new MomentController()
