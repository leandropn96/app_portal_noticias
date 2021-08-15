var express = require('express')
var consign = require('consign')
var bodyparser = require('body-parser')
var app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyparser.urlencoded({extended: true}));

consign().include('app/routes')
.then('config/database.js')
.then('app/models')
.then('app/controllers')
.into(app)

//Exporta o modulo express
module.exports = app;