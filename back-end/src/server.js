const express = require('express');
const connection = require('./config/mysql')
var bodyParser = require('body-parser')
const App = express();

App.use(bodyParser.json())
App.use(bodyParser.urlencoded({extended: false}))

require('./routes/user')(App)


App.listen('3333',()=>{
    connection.connect((err)=>{
        if(err){
            console.log('erro ao conectar ao banco de dados')
        }
        else console.log('Server running 🚀');
    })
    
})