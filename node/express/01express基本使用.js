const express = require('express');
const server = express()
server.get('/', (req, res) => {
    res.end('ok')
})
server.post('/login', (req, res) => {
    res.end('登录成功')
})
server.listen(7177, (req, res) => {
    console.log('express启动')
})