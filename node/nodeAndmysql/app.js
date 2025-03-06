/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-03 23:37:16
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-04 00:02:16
 * @FilePath: \AIGuide\node\nodeAndmysql\app.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const mysql = require('mysql2')
const PhoneData = require('./phone.json')
// 创建一个链接，链接上服务器 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '159357xX',
    database: 'review_mysql'
})

// 测试是否连接成功
connection.connect((err) => {
    if (err) return console.log('连接失败')
    console.log('连接成功')
})

// 执行sql语句
const statment = `INSERT INTO products SET ?`
for (let data of PhoneData) {
    connection.query(statment, data)
}

