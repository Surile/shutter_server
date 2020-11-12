const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')
const responseTime = require('response-time')
const compression = require('compression')
const handleError = require('./middleware/error')
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')

const app = express()

// 中间件
app.use(compression()) // 压缩所有请求

app.use(logger('dev')) // 打印日志

app.use(cors())

app.use(bodyParser.json())

app.use(helmet())

app.use(responseTime()) // 配置response-time

// 加载路由模块
app.use('/', indexRouter)

app.use('/user', userRouter)

// 全局错误处理
app.use(handleError)

module.exports = app
