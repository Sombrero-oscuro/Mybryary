if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const mongoose = require('mongoose')
const db = mongoose.connection

app.set('view engine' , 'ejs')
app.set('views' , __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlparser: true
})
// mongoose.connect( 'mongodb://localhost/mybrary')

db.on('error' , error => console.error(error))
db.once('open' , () => console.log('Connected'))

app.use('/' , indexRouter)

app.listen(process.env.PORT ||3000)