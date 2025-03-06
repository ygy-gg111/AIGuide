/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-27 22:51:06
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-27 23:33:13
 * @FilePath: \AIGuide\node\express\04express中响应.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const upload = multer({
    // dest 和store只能选一个，dest是默认设置，没有后缀名，使用store可以自定义后缀
    // dest: 'uploads/', 
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, './uploads')
        },
        filename(req, file, callback) {
            // 获取文件扩展名
            const ext = path.extname(file.originalname)
            callback(null, `${Date.now()}_${path.basename(file.originalname, ext)}${ext}`)
        },
    })
})
app.post('/upload', upload.single('image'), (req, res) => {

    res.json('上传成功')

})
app.listen(7177)
