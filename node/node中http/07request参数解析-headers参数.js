/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-23 19:24:11
 * @FilePath: \AIGuide\node\node中http\01http的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')


const servie = http.createServer((req, res) => {

    console.log(req.headers, 'req.headers')
    // {
    //     'content-type': 'application/json',  请求参数格式，application/json：json格式，application/x-www-form-urlencoded：表单提交，text/plain：纯文本提交，form-data：文件上传
    //     'user-agent': 'PostmanRuntime/7.29.0',// 请求的浏览器信息

    //     accept: '*/*',// 请求的类型  
    //     'cache-control': 'no-cache',// 缓存控制
    //     'postman-token': '4853b4a4-77c2-446c-ad10-fb6855ad1cc0',// 请求的唯一标识
    //     host: 'localhost:7177',// 请求的域名
    //     'accept-encoding': 'gzip, deflate, br',// 请求参数的编码方式，gzip：gzip压缩，deflate：deflate压缩，br：brotli压缩
    //     connection: 'keep-alive',// 连接方式，keep-alive：长连接，close：短连接
    //     'content-length': '47'// 请求参数的长度
    //   }
    res.end('请求成功')

})

servie.listen(7177, () => {
    console.log('服务器启动成功')
})