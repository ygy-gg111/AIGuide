/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-09 20:24:59
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-09 23:03:57
 * @FilePath: \node\node中用户登录权证\02session在服务器中应用.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Koa = require('koa')
const jwt = require('jsonwebtoken')
const KoaRouter = require('@koa/router')

// 4.1引入fs
const fs = require('fs')
const app = new Koa()

// 这个不能暴露 对称加密 （对称加密 加密和解密使用同一个密钥,容易暴露密钥）
const secretkey = '12121'

// 使用非对称加密
// 1新建一个keys文件夹，在文件夹中新建一个private.key和public.key文件
// 2在git branch中输入  openssl genrsa -out private.key 2048
// 3在git branch中输入  openssl rsa -in private.key -pubout -out public.key
// 4获取公钥和私钥 ，只有私钥在的服务器才会生成token，只需要保护好私钥在的服务器即可，公钥可以用来获取token，但是生成不了token
const privateKey = fs.readFileSync('./keys/private.key')
const publicKey = fs.readFileSync('./keys/public.key')


const userRouter = new KoaRouter({ prefix: '/user' })

userRouter.get('/login', (ctx, next) => {
    // 确保session对象存在
    // const token = jwt.sign({ username: 'ikun' }, secretkey, { expiresIn: '1h' })
    // 私钥 ,需要替换算法
    const token = jwt.sign({ username: 'ikun' }, privateKey, { expiresIn: '1h', algorithm: 'RS256' })
    ctx.body = {
        code: 200,
        message: '登录成功',
        token: token
    }
})

userRouter.get('/list', (ctx, next) => {
    // 1用户在请求接口的时候，在请求头上加上token
    // 获取用户传过来的tokne 

    const headers = ctx.headers;
    const token = headers.authorization.replace('Bearer ', '');
    // 验证token是否正确
    try {
        // const result = jwt.verify(token, secretkey)
        // 使用公钥进行验证
        const result = jwt.verify(token, publicKey, { algorithms: ['RS256'] })
        console.log(result);
        if (result) {
            ctx.body = {
                code: 200,
                message: '获取用户信息成功',
                data: result
            }
        }
    } catch (err) {
        ctx.body = {
            code: 403,
            message: 'token验证失败'
        }
    }




})

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(7177, () => {
    console.log('服务器启动成功: http://localhost:7177')
})