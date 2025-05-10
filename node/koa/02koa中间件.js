/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-28 22:58:19
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-28 23:58:55
 * @FilePath: \AIGuide\node\koa\01koa的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const app = new Koa()
// koa中只能使用use中间件 
app.use((ctx, next) => {
    // 获取请求路径

    console.log(ctx.path)
    if (ctx.path == '/login') {
        ctx.body = '登录成功吧'
    } else if (ctx.path == '/list') {
        ctx.body = '获取列表成功'
    } else if (ctx.path == '/user') {
        ctx.body = '获取用户信息成功'
    }
    // 获取请求方式
    console.log(ctx.method)
    // 获取请求体
    console.log(ctx.headers)

    // next()



})
app.use((ctx, next) => {
    ctx.body = '7777'
})
app.listen(7177, () => {
    console.log('服务器启动成功')
})
