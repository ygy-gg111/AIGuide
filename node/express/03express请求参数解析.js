const express = require('express')
const app = express()
// 3.2使用express内置中间处理body参数
app.use(express.json())
// 4.2内置中间价 
app.use(express.urlencoded({ extend: true }))
// 5.2下载完引入multer
const multer = require('multer')
// 1url?a=1&b=2 query
app.get('/list', (req, res) => {
    // 1.1直接使用req.query
    console.log(req.query)
    const { pageSize, pageNum } = req.query
    console.log(pageSize, pageNum)
    res.json({
        code: 200,
        message: '获取列表成功'
    })
})

// 2 params  url/124/4554
app.get('/user/:id', (req, res) => {
    // 2.1params参数  必须前后端配合，需要在后面加对应的：参数
    console.log(req.params)
    // 2.2req.params 获取到的是一个对象
    const { id } = req.params
    res.json({
        code: 200,
        id
    })
})
// 3post中body参数 
app.post('/login', (req, res) => {
    // 3.1传统获取方式，本质上req，res都是流事件总栈
    // req.setEncoding('utf-8')
    // req.on('data', (chunk) => {
    //     console.log(chunk)
    // })
    // 3.2使用express内置中间件,使用后req.body返回json对象 
    console.log(req.body)
    res.json('获取body参数')
})
// 4 x-www-form-urencoded 键值对类型
app.post('/listData', (req, res) => {
    // console.log(req.body) //直接使用返回为空 
    // 4.1使用流
    // req.on('data', (chunk) => {
    //     console.log(chunk.toString())  // 返回name=kk&age=18
    //     // 4.11老方法 字符串转为对象
    //     let urlString = chunk.toString()
    //     let urlArray = new URLSearchParams(urlString) 
    //     let data = Object.fromEntries(urlArray)
    //     console.log(data)
    // })
    // 4.2内置中间件 app.use(express.urlencoded({ extend: true }))，即可在body中获取到数据 
    console.log(req.body)


    res.end('1')
})
// 5form-data
// 5.1不需要原生转换，使用插件multer,npm install multer
const fromData = multer()
app.post('/resiger', fromData.any(), (req, res) => {
    //原始方法
    // req.on('data', (chunk) => {
    //     console.log(chunk)
    // })
    console.log(req.body)
    res.json('文件上传成功')
})

app.listen(7177)