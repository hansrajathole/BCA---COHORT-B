const express = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const router = express.Router();

// router.use((req, res, next)=>{
//     console.log("router leve middleware");
//     next()
// })

router.get("/register", (req, res) => {
  const { username, email, password } = req.query;
  console.log(username);

  res.send("req aayi");
});
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPass = await bcrypt.hash(password, 10);

    console.log(password);

    console.log(hashedPass);

    const user = await userModel.create({
      username: name,
      email: email,
      password: hashedPass,
    });

    res.status(201).json({ message: "register successfully", user });
  } catch (error) {
    console.log(error);
    res.send(error.message)
    
  }
});

router.post("/login", async (req, res) => {
    try {
        const {email , password} = req.body

        if(!email){
            res.status(400).json({message : "email is required"})
        }

        if(!password){
            res.status(400).json({message : "password is required"})
        }

        const user = await userModel.findOne({email : email})

        if(!user){
            res.status(400).json({message : "user is not found"})
        }

        const match = await bcrypt.compare(password , user.password)

        if(!match){
            res.status(400).json({message : "email or password does not match"})
        }

        const token = await jwt.sign({id : user._id , email : user.email},"secret" )

        delete user._doc.password

        res.status(200).json({message : "login successfully" , token , user})

    } catch (error) {
        console.log(error);
        res.send(error.message)
    
    }
});

router.get("/me/:userId", async (req, res) => {
  // console.log(req.params);

  const { userId } = req.params;
  // const id = req.params.userId

  console.log(userId);

  // console.log(id);

  res.send("id aayi");
});

module.exports = router;
