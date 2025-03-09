

// 1
const fs = require('fs')
const path = require('path');

const EventEmitter = require('events');
fs.readFile(path.join(__dirname, './基础知识node/01.js'), (err, data) => {
    if (err) return
    console.log(data.toString())

})
// let out = path.join(__dirname, '基础知识node', '02.js')
// fs.writeFile(out, '你好', { flag: 'w', encoding: 'utf-8' }, (err) => {
//     if (err) return
//     // console.log('写入成功')

// })
// 读取文件夹 
function readDir(pathUrl) {

    fs.readdir(path.join(__dirname, pathUrl), { withFileTypes: true }, (err, data) => {
        if (err) return

        data.forEach((file) => {
            if (file.isDirectory()) {
                let newPath = `${pathUrl}/${file.name}`
                readDir(newPath)
            } else {
                fs.readFile(path.join(__dirname, pathUrl, file.name), 'utf-8', (err, data) => {
                    if (err) return
                    console.log(data, 'data')
                })
            }
        })




    })
}
readDir('./基础知识node')

// 事件总栈
const emitter = new EventEmitter();
let fn = () => {
    console.log('点击事件')
}
emitter.on('click', fn)
// setTimeout(() => {
//     emitter.off('click', fn)
// }, 1000)
emitter.emit('click')

// 文件流 ->复制
const rs = fs.createReadStream(path.join(__dirname, './基础知识node/02.js'));
const ws = fs.createWriteStream(path.join(__dirname, './基础知识node/01.js'));
rs.on('open', () => {
    console.log('打开文件')
})
rs.on('data', (data) => {
    console.log(data.toString(), 'data')
    ws.write(data)
})
rs.on('end', () => {
    ws.close()
    console.log('结束')
})


