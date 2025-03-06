/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-25 23:37:48
 * @FilePath: \AIGuide\node\node中http\01http的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')
const fs = require('fs')
const path = require('path')
// 创建图片存储目录
const imageDir = path.join(__dirname, 'image')
if (!fs.existsSync(imageDir)) {
    fs.mkdirSync(imageDir, { recursive: true })
}
const servie = http.createServer((req, res) => {
    let isLogin = false
    // 首先需要设置 二进制码request.setEncoding('binary')
    req.setEncoding('binary')
    // 把对应的获取出来
    let boundary = ''
    try {
        boundary = req.headers['content-type'].split(';')[1].replace(' boundary=', '')
    } catch (error) {
        res.writeHead(400)
        return res.end('Invalid Content-Type')
    }
    let imageData = ''
    if (req.url == '/upload' && req.method == 'POST') {
        let body = {}
        // let rs = fs.createWriteStream(`./image/${Date.now()}.png`, { flags: 'a' })
        req.on('data', (data) => {
            imageData += data

            // 在req.on中直接写入文件，导致多次写入覆盖

        })
        req.on('end', () => {
            console.log(data, 'data')
            // 1设置固定图片形式
            const msgType = 'image/png'
            //    获取这个位置'image/jpeg'
            const imageTypePosition = data.indexOf(msgType) + msgType.length;
            //    截取在这之后的参数
            imageData = data.slice(imageTypePosition)
            imageData = imageData.replace(/^\s\s*/, '')
            // 把最后的boundary也替换了，才行 
            imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`))
            console.log(imageData, 'imageData')
            // rs.write(imageData)
            fs.writeFile('./image/11.png', imageData, 'binary', () => {
                console.log(6666)
                res.end('上传成功')
            })
            // res.end('上传成功')
            // if (isLogin) {
            //     // 设置响应头返回格式nono
            //     res.writeHead(200, {
            //         'content-type': 'application/json;charset=utf8'
            //     })
            //     res.write('登录成功')

            //     res.end()
            // } else {
            //     res.writeHead(401)
            //     res.write('登录失败')
            //     res.end()
            // }

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