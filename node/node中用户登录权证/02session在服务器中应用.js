/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-09 20:24:59
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-09 20:50:43
 * @FilePath: \node\node中用户登录权证\02session在服务器中应用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const KoaRouter = require('@koa/router')
const Koasession = require('koa-session')

const app = new Koa()



// 设置session配置
const session = Koasession({
    key: 'sessionid',      // cookie的名称
    maxAge: 86400000,      // cookie的有效期，单位毫秒，这里设置为1天
    autoCommit: true,      // 自动提交头部
    overwrite: true,       // 是否允许重写
    httpOnly: true,        // 是否仅服务器可访问，防止客户端JS获取
    signed: true,         // 是否签名（即使不签名也需要设置app.keys）
    rolling: false,        // 每次请求时强制设置cookie，重置cookie过期时间
    renew: false,          // 当session快过期时更新session
    secure: false,         // 仅通过HTTPS发送cookie
    sameSite: null,        // 允许服务器设定cookie是否随跨站请求一起发送
}, app)
// 必须设置app.keys（即使signed为false）    设置了signed true 必须设置keys
app.keys = ['aaa', 'bb']
// koa-session 7.0的正确使用方式
app.use(session)



const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.get('/login', (ctx, next) => {
    // 确保session对象存在
    if (!ctx.session) ctx.session = {}

    ctx.session.username = 'ikun'
    ctx.body = '登录成功'
})

userRouter.get('/list', (ctx, next) => {
    const username = ctx.session ? ctx.session.username : null
    console.log('当前登录用户:', username)

    if (!username) {
        ctx.body = '请先登录'
        return
    }

    ctx.body = `获取用户 ${username} 的个人信息`
})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(7177, () => {
    console.log('服务器启动成功: http://localhost:7177')
})