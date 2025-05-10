const express = require('express');
const server = express()
// 中间件本质上是一种回调函数 
// express提供两种注册中间件的
// 1.1use一开始指挥匹配第一个中间件，如果有next 就传给第二个
server.use((req, res, next) => {
    console.log('中间件1')
    next()
})
// 1.2use可以匹配具体的路径，只要路径是list就可以匹配 
// 只要遇到res.end或者res.json就不会继续匹配了
server.use('/list', (req, res, next) => {
    console.log('中间件2')
    res.json({
        code: 200,
        message: '获取列表成功'
    })
})
// 2 使用get，post等method方式注册中间件 
// 2.1 可以注册多个中间件
server.get('/', (req, res, next) => {

    console.log(9999)

    res.json('111')
})

server.post('/login', (req, res) => {
    res.end('登录成功')
})
server.listen(7177, (req, res) => {
    console.log('express启动')
})