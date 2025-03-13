/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-07 00:29:37
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-13 23:45:46
 * @FilePath: \ygyhub\src\router\user.router.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const KoaRouter = require('@koa/router')
const momentRouter = new KoaRouter({ prefix: '/moment' })
const { create, getList, getMomentById, update, remove } = require('../controller/moment.controller')
const { verIfyAuth } = require('../middleware/login.middleware')
const { verIfyContent } = require('../middleware/moment.middleware')
const { verifyPermission } = require('../controller/permission.controller')
momentRouter.post('/', verIfyAuth, verIfyContent, create)
momentRouter.get('/list', getList)
momentRouter.get('/:momentsId', getMomentById)
momentRouter.patch('/:momentsId', verIfyAuth, verifyPermission, update)
momentRouter.delete('/:momentsId', verIfyAuth, verifyPermission, remove)
module.exports = momentRouter



