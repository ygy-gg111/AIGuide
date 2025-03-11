const fs = require('fs')
const registerRouter = (app) => {
    fs.readdir(__dirname, (err, files) => {
        for (let file of files) {
            if (!file.endsWith('.router.js')) continue
            const router = require(`./${file}`)
            app.use(router.routes())
            app.use(router.allowedMethods())
        }
    })

}

module.exports = registerRouter
