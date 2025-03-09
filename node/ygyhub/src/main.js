/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:05:53
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-07 19:17:12
 * @FilePath: \ygyhub\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */



const { SERVER_PORT } = require('./config/server')
const app = require('./app/index')
app.listen(SERVER_PORT, () => {
    console.log('服务器启动成功')
})  
