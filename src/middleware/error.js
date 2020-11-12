// 错误处理中间件
const handleError = (err, req, res, next) => {
    res.status(500).send({
        error: err.message,
    })
}

module.exports = handleError
