const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send({ok:'2'})
})


router.post("/register",(req,res)=>{
  res.send({ok:true})
})


// ? Rotas vão ser prefixadas com o '/user
module.exports = (App) => App.use("/user", router);
