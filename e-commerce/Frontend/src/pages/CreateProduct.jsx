import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateProduct = () => {

    const navigate = useNavigate()
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")

    const token = localStorage.getItem("token")

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post("http://localhost:4000/products/create" , 
            {title , description , image , category , price}, {
                headers : {
                    Authorization : `bearer ${token}`
                }
            })
            .then((res)=>{
                console.log(res.data);
                navigate("/")
            })
            .catch(err=>console.log(err))


        
    }

  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center '>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}  className=' w-[450px] border bg-white rounded-2xl py-3 px-7'>

        <h1 className='text-center text-2xl'>Create Product</h1>

        <label htmlFor="title" >Title :</label>
        <input type="text" className='border outline-none w-full mt-3  rounded py-1 px-2' id='title'
        value={title}
        onChange={(e)=>{
            settitle(e.target.value)
        }}
        />
        <br />

         <label htmlFor="description" >Description :</label>
        <input type="text" className='border outline-none w-full mt-3  rounded py-1 px-2' id='description'
        value={description}
        onChange={(e)=>{
            setdescription(e.target.value)
        }}
        />
        <br />

        <label htmlFor="category">Category :</label>
        <input type="text" className='border outline-none w-full mt-3 rounded py-1 px-2' id='category'
        value={category}
        onChange={(e)=>{
            setcategory(e.target.value)
        }}
        />
        <br />

        <label htmlFor="price">Price :</label>
        <input type="number" className='border outline-none w-full mt-3 rounded py-1 px-2' id='price'
        value={price}
        onChange={(e)=>{
            setprice(e.target.value)
        }}
        />
        <br />

        <label htmlFor="image">Image :</label>
        <input type="text" className='border outline-none w-full mt-3 rounded py-1 px-2' id='image'
        value={image}
        onChange={(e)=>{
            setimage(e.target.value)
        }}
        />
        <br />
        <br />
       <div className='flex justify-center'>
         <button  className='rounded bg-blue-400 text-white px-2.5 py-1'>Create Product</button>
       </div>
       <br />
      
      </form>
    </div>
  )
}

export default CreateProduct
