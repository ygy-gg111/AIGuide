/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-28 22:58:19
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-01 23:59:52
 * @FilePath: \AIGuide\node\koa\01koa的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
// 下载对应包npm install koa-static 
// 引入中间件 
const static = require('koa-static')
// 创建实例
const app = new Koa()
// 使用中间件  http://localhost:7177/6ac8144addc770679b45d86042ee3b3e.png 可以访问图片了
app.use(static('uploads'))

app.listen(7177, () => {
    console.log('服务器启动成功')
})
