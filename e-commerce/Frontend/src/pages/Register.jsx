import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Register = () => {


    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [username, setusername] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        if(email.trim === ""){
            alert("please enter email first")
        }

        axios.post("http://localhost:4000/users/login",{ email , password})
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center '>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}  className=' w-[450px] border bg-white rounded-2xl py-3 px-7'>
        <h1 className='text-center text-2xl'>Register Here</h1>
        <label htmlFor="email" >Email :</label>
        <input type="text" className='border outline-none w-full mt-3  rounded py-1 px-2' id='email'
        value={email}
        onChange={(e)=>{
           console.log(e.target.value);
            setemail(e.target.value)
        }}
        />
        <br />
        <br />
         <label htmlFor="username" >Username :</label>
        <input type="text" className='border outline-none w-full mt-3  rounded py-1 px-2' id='username'
        value={username}
        onChange={(e)=>{
            setusername(e.target.value)
        }}
        />
        <br />
        <br />
        <label htmlFor="password">Password :</label>
        <input type="password" className='border outline-none w-full mt-3 rounded py-1 px-2' id='password'
        value={password}
        onChange={(e)=>{
            setpassword(e.target.value)
        }}
        />
        <br />
        <br />
       <div className='flex justify-center'>
         <button  className='rounded bg-blue-400 text-white px-2.5 py-1'>Register</button>
       </div>
       <br />
       <p className='text-center'>if you have an account? <Link to="/login" >Login</Link></p>
      </form>
    </div>
  )
}

export default Register
