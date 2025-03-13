/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-11 23:22:05
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-12 23:09:58
 * @FilePath: \ygyhub\src\controller\moment.controller.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const momentService = require('../service/moment.service')
const { create, getList, getMomentById } = momentService
class MomentController {
    async create(ctx, next) {
        // 1获取用户id
        const { id } = ctx.user
        // 2 获取输入内容
        const { content } = ctx.request.body
        // 3 数据库操作
        const result = await create(content, id)
        ctx.body = {
            code: 200,
            message: '创建动态',
            result
        }
    }
    async getList(ctx, next) {
        console.log(ctx.query)
        const { pageSize, pageNo } = ctx.query
        console.log(pageSize, pageNo)
        const result = await getList(pageSize, pageNo)
        ctx.body = {
            code: 200,
            message: '获取动态列表',
            result
        }
    }
    async getMomentById(ctx, next) {
        const { id } = ctx.params
        if (!id) {
            ctx.body = {
                code: 400,
                message: 'id不能为空',
            }
            return
        }
        const result = await getMomentById(id)
        ctx.body = {
            code: 200,
            message: '获取动态详情',
            result
        }
    }
}
module.exports = new MomentController()
