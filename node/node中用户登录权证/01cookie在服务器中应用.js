const Koa = require('koa')
const KoaRouter = require('@koa/router')
const app = new Koa()
const userRouter = new KoaRouter({ prefix: '/user' })
userRouter.get('/login', (ctx, next) => {
    // koa中自动携带了cookie，无需下载cookie
    ctx.cookies.set('username', 'ygy', {
        maxAge: 1000 * 60 * 60 * 24,
        signed: false
    })
    ctx.body = '登录成功'
})
userRouter.get('/list', (ctx, next) => {
    // 这样就可直接获取登陆后生成的cookie 
    const username = ctx.cookies.get('username')
    console.log(username)
    ctx.body = '获取个人信息'

})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(7177, () => {
    console.log('服务器启动成功')
})
