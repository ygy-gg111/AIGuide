/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-28 22:58:19
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-02 00:04:54
 * @FilePath: \AIGuide\node\koa\01koa的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
app.use((ctx, next) => {
    console.log(ctx, 111)
    // ctx.body是响应体，不是请求体 
    // 1返回字符串
    // ctx.body = '11'
    // 2返回对象
    // ctx.body = {
    //     message: '回调函数',
    //     data: ['1']
    // }
    // // 3返回数组 
    // ctx.body = ['111', '222']
    // // 4返回buffer 
    ctx.body = Buffer.from('111')
    // // 5返回流
    // ctx.body = fs.createReadStream('./uploads/6ac8144addc770679b45d86042ee3b3e.png')
})

app.listen(7177, () => {
    console.log('服务器启动成功')
})
