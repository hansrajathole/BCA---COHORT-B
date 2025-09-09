const express = require("express")

const auth = express.Router()

auth.get("/", (req ,res)=>{
    res.send("HOME PAGE")
})


auth.get("/about", (req,res)=>{
    res.send("ABOUT PAGE")
})


module.exports = auth