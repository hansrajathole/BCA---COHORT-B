const app = require("./src/app")
const connect = require("./src/db/db")

const PORT = 4000


app.listen(PORT , ()=>{
    console.log("SERVER IS RUNNING ON PORT NO :",PORT);
    connect()
})