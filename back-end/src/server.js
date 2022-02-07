const express = require('express');
var bodyParser = require('body-parser')
const App = express();

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: false}))

require('./routes/user')(App)


App.listen('3333',()=>{
    console.log('Server running 🚀');
})