/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-23 18:36:37
 * @FilePath: \AIGuide\node\node中http\01http的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const http = require('http')
const url = require('url')
const qs = require('querystring')
const servie = http.createServer((req, res) => {
    // 1传统方法
    // console.log(req.url, 'req.url')
    // const urlString = req.url.split('?')[1]
    // const queryArray = urlString.split('&')
    // const queryObj = {}
    // queryArray.forEach(item => {
    //     let [key, value] = item.split('=')
    //     queryObj[key] = value
    // })
    // console.log(queryObj, 'queryObj')
    // 2 使用url内置模块 
    //2.1解析url后面的参数 【url,query】
    // const urlString = url.parse(req.url)
    // 2.2获取url?后面的参数
    // const queryString = urlString.query
    // 2.3name=1&age=2转为对象
    // const queryObj = qs.parse(queryString)
    // const { pageSize, pageNum } = queryObj
    // 3使用new URLSearchParams
    const urlString = url.parse(req.url)
    const queryString = new URLSearchParams(urlString.query)
    const queryObj = Object.fromEntries(queryString)
    console.log(queryObj, 'queryObj')

    // console.log(queryObj, 'queryObj')
    res.end('请求成功')
})

servie.listen(7177, () => {
    console.log('服务器启动成功')
})