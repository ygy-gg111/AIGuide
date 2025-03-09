const mysql = require('mysql2')
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '159357xX',
    database: 'review_mysql',
    port: 3306
})
pool.getConnection((err, connection) => {
    if (err) {
        console.log('连接失败')
        return
    }
    connection.connect((err) => {
        if (err) {
            console.log('数据库链接失败')
            return
        }
        console.log('数据库连接成功')
    })
})
const connection = pool.promise()
module.exports = connection


