/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-28 22:58:19
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-01 23:47:40
 * @FilePath: \AIGuide\node\koa\01koa的基本使用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')

const koaRouter = require('@koa/router')
// 3.1psot中请求参数解析，需要借助npm包  npm install koa-bodyparser
// 3.2下载后引入
const formBody = require('koa-bodyparser')
// 5.1form-data文件上传的，需要使用 npm install @koa/multer multer
// 5.2下载后引入 
const multer = require('@koa/multer')
// 5.3创建实例
const upload = new multer({
    dest: './uploads',//默认文件保存路径,这样不会保存为对应的格式，自定义
    // 自定义文件保存路径和名字
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, './uploads')
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}_${path.basename(file.originalname, ext)}${ext}`)
        },
    })
})
const userRouter = new koaRouter({ prefix: '/getway' })
const app = new Koa()
// 3.3中间件引入 
app.use(formBody())
userRouter.get('/list', (ctx, next) => {
    console.log('获取用户信息成功')
    console.log(ctx.query)   //1 返回这个对象{ pageSize: '10', 'pageNum ': '1' }
    ctx.body = {
        message: '获取用户信息',
        data: JSON.stringify(ctx.query)
    }
})
userRouter.get('/list/:id', (ctx, next) => {
    console.log(ctx.params)  //2{ id: '123' } 返回对象
    ctx.body = '获取用户信息'
})
userRouter.post('/login', (ctx, next) => {
    // 3修改用户信息   //直接没有返回，需要下载npm install koa-bodyparserr 
    console.log(ctx.request.body)   //.3.4经过上面三个步奏后就可以正常返回{ name: 'luka', password: '26' }对象
    ctx.body = '登录'
})
userRouter.post('/urlencoded', (ctx, next) => {
    //4 x-www-urlencoded 删除用户信息
    console.log(ctx.request.body)  //下载了koa-bodyparser后，自动解析x-www。urlencoded 格式返回 { user_id: '77' }
    ctx.body = '删除用户信息'
})
userRouter.post('/upload', upload.single('file'), (ctx, next) => {
    // 5
    console.log(ctx.request.body)// 直接没有返回的，需要下载multer ，npm install @koa/multer multer
    ctx.body = '上传文件'
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.listen(7177, () => {
    console.log('服务器启动成功')
})
