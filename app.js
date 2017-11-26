var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var dbConfig = require('./config')

//var Log = require('./models/logModel')
var LogSchema = require('./schemas/logSchema')

var index = require('./routes/index')
var users = require('./routes/users')
var notes = require('./routes/notes')
var ip = require('./routes/ip')
var log = require('./routes/log')
var tag = require('./routes/tag')
var archives = require('./routes/archives')
var notice = require('./routes/notice')
var photo = require('./routes/photo')
var message = require('./routes/message')

var app = express()

var db = mongoose.connect(dbConfig.uri, dbConfig.auth)
//var logModel = db.model('log', LogSchema)
var logModel = require('./service/log-service')
// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.use(function (req, res, next) {
  if(req.method == 'OPTIONS'){
    
  }else{
    var doc = {
      time: new Date().toLocaleString(),
      api: req.originalUrl,
      method: req.method,
      body: req.body,
      params: req.query,
    }
    var logEntity = new logModel(doc)
    logEntity.save(function (error) {
    })
  }
  next()
})

app.use('/', index)
app.use('/', users)
app.use('/', notes)
app.use('/ip', ip)
app.use('/', log)
app.use('/', tag)
app.use('/', archives)
app.use('/', notice)
app.use('/', photo)
app.use('/', message)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
