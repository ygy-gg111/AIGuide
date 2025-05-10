
const loginService = require('../service/login.service')
const { PRIVATE_KEY } = require('../config/screct')
const jwt = require('jsonwebtoken')
class LoginController {
    async sign(ctx, next) {
        //  获取用户信息，
        const {
            username,
            id,
            password
        } = ctx.user
        // 生辰token 
        const token = jwt.sign({ username, id, password }, PRIVATE_KEY, {
            algorithm: 'RS256',
            expiresIn: 24 * 60 * 60
        })
        // console.log(result)
        ctx.body = {
            code: 200,
            message: '登录成功',
            result: {
                username,
                token
            }
        }
    }
    async demo(ctx, next) {
        ctx.body = {
            code: 200,
            message: '用户列表',

        }
    }
}
module.exports = new LoginController()

