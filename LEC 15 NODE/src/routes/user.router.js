const express = require("express")
const userModel = require("../models/user.model")


const router = express.Router()

router.use((req, res, next)=>{
    console.log("router leve middleware");
    
})

router.get("/register",(req ,res)=>{
   const {username , email , password} = req.query
    console.log(username);
    
    res.send("req aayi")
})
router.post("/register",async (req ,res)=>{

     const {name , email , password} = req.body


    const user = await userModel.create({
        username : name,
        email : email,
        password : password

     })


     res.status(201).json({ message : "register successfully" , user})
})


router.get("/me/:userId",async (req , res) => {
    // console.log(req.params);

    console.log(req.user);
    
    const {userId} = req.params
    const id = req.params.userId

    console.log(userId);

    console.log(id);
    
    
    res.send("id aayi")
    
})



module.exports = router