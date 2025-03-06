/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 22:51:06
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-27 22:57:26
 * @FilePath: \AIGuide\node\express\04express中响应.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express()
app.get('/', (req, res) => {
    // 基础的res.end
    // res.end('111')
    // res.json 可以返回多种类型
    // 字符串
    // res.json('响应成功')
    // 对象（最常用）
    // res.json({
    //     code: 200,
    //     message: '响应成功',
    //     data: [1, 2, 3,]
    // })
    // 返回数组 
    // res.json([1, 2, 3, 4])
    // 返回html
    res.json(`<h1>上传成功</h1>`)


})
app.listen(7177)
