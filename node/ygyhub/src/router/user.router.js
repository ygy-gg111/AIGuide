const KoaRouter = require('@koa/router')
const userRouter = new KoaRouter({ prefix: '/user' })
const { create } = require('../controller/user.controller')
const { verIfyUer, handlePassword } = require('../middleware/user.middleware')
userRouter.post('/', verIfyUer, handlePassword, create)
userRouter.get('/list', (ctx, next) => {

    create(ctx, next)
})
module.exports = userRouter
