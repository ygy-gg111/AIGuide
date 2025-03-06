/*
 * @Author: ygy 1572116017@qq.com
 * @Date: 2025-03-05 23:10:30
 * @LastEditors: ygy 1572116017@qq.com
 * @LastEditTime: 2025-03-05 23:19:12
 * @FilePath: \AIGuide\node\nodeAndmysql\ctrMysql.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 1npm install mysql2 
// 2 引入mysql2

const mysql = require('mysql2');
// 3 创建链接 输入数据库的地址 用户名 密码 数据库名
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '159357xX',
    database: 'review_mysql'
});
// 4 连接数据库 
connection.connect((err) => {
    if (err) {
        console.log('连接失败', err);
    } else {
        console.log('连接成功');
    }
});
// 5 执行sql语句 
// 这样执行,会导致sql注入,使用预制语法
// const statement = 'SELECT * FROM products'
// connection.query(statement, (err, value, file) => {
//     if (err) {
//         return
//     }
//     console.log(value)
// })
const statement = `SELECT * FROM products WHERE price > ?`
connection.execute(statement, [1999], (err, value) => {
    console.log(value)
})
