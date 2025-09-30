const express = require("express")
const userRouter = require("../src/routes/user.router")
const authRouter = require("../src/routes/auth.router")
const postRouter = require("../src/routes/post.router")
var session = require('express-session')
const path = require("path")
const config = require("./config/config")
const app = express()
require("dotenv").config()


// middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))

// express-session middleware
app.use(session({
    secret : config.JWT_SECRET,
    saveUninitialized : true,
    resave : false
}))

// ejs setup 
app.set("view engine", "ejs")
app.set("views",path.join(__dirname, "views"))

// public folder path setup
app.use(express.static(path.join(__dirname,"../public/css")))


// base url
app.use("/", authRouter)
app.use("/users",userRouter)
app.use("/posts", postRouter)



module.exports = app