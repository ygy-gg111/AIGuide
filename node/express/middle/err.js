/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 23:55:16
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-28 00:24:27
 * @FilePath: \AIGuide\node\express\middle\err.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 在express中，如果写了errCOde，就必须要把所有参数都写全
const GetErr = function (errCode, req, res, next) {
    console.log(errCode)
    console.log(req)
    res.json(errCode)
}

module.exports = {
    GetErr
}
