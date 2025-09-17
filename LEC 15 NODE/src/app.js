const express = require("express")
const userRouter = require("../src/routes/user.router")

const app = express()

app.use((req, res , next)=>{

    console.log("app level");
    


    next()
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/users",userRouter)
// app.use("/product",productRouter)

module.exports = app