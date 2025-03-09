
const userService = require('../../service/user.service')

class UserController {
    async create(ctx, next) {
        const result = await userService.create(ctx.request.body)
        console.log(result)
        ctx.body = {
            code: 200,
            message: '欢迎回家',
            result
        }
    }
}
module.exports = new UserController()

