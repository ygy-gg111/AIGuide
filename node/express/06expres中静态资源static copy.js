/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 22:51:06
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-27 23:30:05
 * @FilePath: \AIGuide\node\express\04express中响应.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express()
//写当前服务下文件夹名字，不要加/开头
app.use(express.static('./uploads'))
app.get('/', (req, res) => {
    res.json('访问成功')
})
app.listen(7177)
