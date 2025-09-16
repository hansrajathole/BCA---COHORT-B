const express = require("express")
const userRouter = require("../src/routes/user.router")

const app = express()



app.use("/users",userRouter)
// app.use("/product",productRouter)

module.exports = app