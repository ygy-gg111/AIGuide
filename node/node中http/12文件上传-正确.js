/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-02-23 15:30:21
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-02-26 22:44:43
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
    // 首先需要设置 二进制码request.setEncoding('binary')
    req.setEncoding('binary')
    // 把对应的获取出来
    let boundary = ''
    try {
        boundary = req.headers['content-type'].split('boundary=')[1]

        // req.headers['content-type'].split('boundary=')[1] req.headers['content-type'].split(';')[1].replace(' boundary=', '')
    } catch (error) {
        res.writeHead(400)
        return res.end('Invalid Content-Type')
    }
    let body = Buffer.alloc(0)
    let fileData = null
    if (req.url == '/upload' && req.method == 'POST') {

        // let rs = fs.createWriteStream(`./image/${Date.now()}.png`, { flags: 'a' })
        req.on('data', (chunk) => {
            body = Buffer.concat([body, Buffer.from(chunk, 'binary')])
            // 在req.on中直接写入文件，导致多次写入覆盖

        })
        req.on('end', () => {
            try {
                // 完整解析multipart数据
                const parts = body.toString('binary').split(`--${boundary}`)
                // 查找包含文件数据的部分
                const filePart = parts.find(part => part.includes('Content-Disposition: form-data;') && part.includes('filename='))
                if (!filePart) {
                    res.writeHead(400);
                    return res.end('No file uploaded')
                }
                // 动态获取content-Type
                const contentTypeMatch = filePart.match(/Content-Type:(.*?)(\r\n|$)/i);
                const contentType = contentTypeMatch ? contentTypeMatch[1] : 'application/octet-stream';
                // 提取文件名
                const fileNameMatch = filePart.match(/filename="(.*?)"/i);
                const fileName = fileNameMatch ? fileNameMatch[1] : `upload_${Date.now()}`;
                // 提取文件数据
                const dataStart = filePart.indexOf('\r\n\r\n') + 4;
                const dataEnd = filePart.lastIndexOf('\r\n');
                const rawData = filePart.slice(dataStart, dataEnd);
                // 转换编码并保存
                const bufferData = Buffer.from(rawData, 'binary');
                const fileExt = path.extname(fileName) ||
                    (contentType.startsWith('image/') ? `.${contentType.split('/')[1]}` : '.dat');

                const finalPath = path.join(
                    imageDir,
                    `${path.basename(fileName, path.extname(fileName))}_${Date.now()}${fileExt}`
                );
                fs.writeFile(finalPath, bufferData, (err) => {
                    if (err) {
                        console.error('写入失败:', err);
                        res.writeHead(500);
                        return res.end('文件保存失败');
                    }

                    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                    res.end(`
                      <h1>上传成功</h1>
                      <p>文件路径: ${finalPath}</p>
                      <img src="${finalPath}" style="max-width: 500px;">
                    `);
                });

            } catch (e) {
                res.writeHead(500)
                res.end('文件保存失败')
            }
            // 1设置固定图片形式



        })
    }


})

servie.listen(7177, () => {
    console.log('服务器启动成功')
})