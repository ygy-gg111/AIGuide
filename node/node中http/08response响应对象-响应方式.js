/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-23 19:27:02
 * @FilePath: \AIGuide\node\node中http\01http的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')


const servie = http.createServer((req, res) => {

    // res是一个可读写的流
    res.write('<h1>你好</h1>')
    // 一定要调用end方法，否则会一直处于等待状态
    res.end()

})

servie.listen(7177, () => {
    console.log('服务器启动成功')
})