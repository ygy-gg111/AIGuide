/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-24 23:48:14
 * @FilePath: \AIGuide\node\node中http\01http的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')


const servie = http.createServer((req, res) => {
    let isLogin = false
    if (req.url == '/login' && req.method == 'POST') {
        let body = {}
        req.setEncoding('utf-8')
        req.on('data', (data) => {

            body = JSON.parse(data)
            console.log(body, 'body')
            if (body.username == 'ygy' && body.password == '123456') {
                isLogin = true
            } else {
                isLogin = false
            }
        })
        req.on('end', () => {
            if (isLogin) {
                res.writeHead(200)
                res.write('登录成功')
                res.end()
            } else {
                res.writeHead(401)
                res.write('登录失败')
                res.end()
            }

        })
    }
    // let ary = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    // let urlString = new URLSearchParams(url.parse(req.url).query)
    // let queryObj = Object.fromEntries(urlString)
    // console.log(queryObj, 'queryObj')
    // if (queryObj.number) {
    //     ary = filterData(ary, queryObj.number)
    //     res.writeHead(200)
    //     res.write(JSON.stringify(ary))

    // } else {
    //     res.writeHead(200)
    //     res.write(JSON.stringify(ary))
    // }

    // res.end()

})
function filterData(ary = [], key) {
    return ary.filter(item => item.includes(key))

}
servie.listen(7177, () => {
    console.log('服务器启动成功')
})