const express = require("express");
const connection = require("../config/mysql");
const multer  = require('multer')
const storage = require('../config/upload')
const upload = multer({ storage });
const router = express.Router();

router.get("/",(req,res)=>{
    connection.query("SELECT * FROM users",(err,results)=>{
      res.send(results)
    })

})


router.post("/register",upload.single('photo'),(req,res)=>{
  const {code,name,birthday} = req.body
  const photo = req.file.filename
  const values = [
    code,name,birthday,photo
  ]


  
  connection.query('INSERT INTO users(code,name,birthday,photo)VALUES(?,?,?,?) ',values,(results)=>{
    res.json({results})
  })
})


// ? Rotas vão ser prefixadas com o '/user
module.exports = (App) => App.use("/user", router);
