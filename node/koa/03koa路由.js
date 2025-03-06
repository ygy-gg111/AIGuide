/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-28 22:58:19
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-01 00:22:21
 * @FilePath: \AIGuide\node\koa\01koa的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
// 2 引入路由
const koaRouter = require('@koa/router')
const userRouter = new koaRouter({ prefix: '/user' })
const app = new Koa()

// koa中只能使用use中间件 
app.use((ctx, next) => {
    // 获取请求路径

    // 第一 koa需要安装 npm install @koa/router

    console.log(ctx.path)
    // 这样写太绕了不方便管理。使用路由,
    // if (ctx.path == '/login') {
    //     ctx.body = '登录成功吧'
    // } else if (ctx.path == '/list') {
    //     ctx.body = '获取列表成功'
    // } else if (ctx.path == '/user') {
    //     ctx.body = '获取用户信息成功'
    // }
    // 获取请求方式
    console.log(ctx.method)
    // 获取请求体
    console.log(ctx.headers)

    next()
    // ctx.body = '1111'


})
userRouter.get('/', (ctx, next) => {
    console.log('获取用户信息成功')
    ctx.body = '获取用户信息'
})
userRouter.post('/', (ctx, next) => {
    // 修改用户信息
    ctx.body = '修改用户信息'
})
userRouter.delete('/', (ctx, next) => {
    // 删除用户信息
    ctx.body = '删除用户信息'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(7177, () => {
    console.log('服务器启动成功')
})
