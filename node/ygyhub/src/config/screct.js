const fs = require('fs')
// 注意这里的路径问题
const PRIVATE_KEY = fs.readFileSync('./src/config/keys/private.key')
const Public_KEY = fs.readFileSync('./src/config/keys/public.key')
module.exports = {
    PRIVATE_KEY,
    Public_KEY
}
