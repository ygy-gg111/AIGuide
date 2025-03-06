

module.exports = function errLog(err, ctx) {
    console.log(err, 'err')
    let errCode = err
    switch (errCode) {
        case 400:
            ctx.body = {
                code: errCode,
            }
            ctx.status = 400
            break
    }
}


