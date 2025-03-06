/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-28 22:58:19
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-28 23:41:53
 * @FilePath: \AIGuide\node\koa\01koa的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const app = new Koa()
app.use((ctx, next) => {
    // koa不返回req,res直接返回ctx，ctx包含req,res
    // console.log(ctx)
    // koa请求中的请求参数
    // console.log(ctx.request)
    // node请求中的请求参数
    // console.log(ctx.req)
    // koa请求中的响应体
    console.log(ctx.response)
    // node请求中的响应体
    // console.log(ctx.res)
    // ctx.body不是获取请求体，而是作为响应体
    ctx.body = '111'

})
app.listen(7177, () => {
    console.log('服务器启动成功')
})
