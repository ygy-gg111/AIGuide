/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-23 19:10:34
 * @FilePath: \AIGuide\node\node中http\01http的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')


const servie = http.createServer((req, res) => {
    if (req.method == 'POST' && req.url == '/login') {

        // req.body 直接获取不到
        // console.log(req.body, 'req.body')
        // http中req,res是流模式 
        //1设置编码,不然返回burrer
        req.setEncoding('utf-8')
        let isLogin = false
        //req,res是事件总栈，流模式
        req.on('data', (data) => {
            // 2 获取body参数‘
            let bodyObj = JSON.parse(data)
            console.log(bodyObj, 'body')
            console.log(bodyObj.name, bodyObj.password, 'body')
            if (bodyObj.name == 'luka' && bodyObj.password == '26') {

                isLogin = true
            } else {
                console.log('请输入正确的密码')
                isLogin = false
            }
        })
        req.on('end', () => {

            if (isLogin) {

                res.end('请求成功1111')
            } else {
                res.end('请输入正确的密码')
            }

        })

    } else {
        res.end('404')
    }


})

servie.listen(7177, () => {
    console.log('服务器启动成功')
})