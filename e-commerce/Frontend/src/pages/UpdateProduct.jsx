import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = () => {

    const navigate = useNavigate()
    const params = useParams()
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState("")
    const [category, setcategory] = useState("")
    const [price, setprice] = useState("")

    const token = localStorage.getItem("token")
    const productId = params.productId

   const [productData, setproductData] = useState({})
   useEffect(() => {
     getProductDetail()

   }, [])
   


   const getProductDetail = ()=>{
        axios.get(`http://localhost:4000/products/detail/${productId}`,{
            headers : {
                Authorization : `bearer ${token}`
            }
        })
        .then((res)=>{
            // console.log(res.data.product);
            setproductData(res.data.product)
            console.log(productData);
            settitle(res.data.product.title)
            setcategory(res.data.product.category)
            setprice(res.data.product.price)
            setimage(res.data.product.image)
            setdescription(res.data.product.description)
            
        })
        .catch(err=>console.log(err))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.patch(`http://localhost:4000/products/update/${productId}` , 
            {title , description , image , category , price}, {
                headers : {
                    Authorization : `bearer ${token}`
                }
            })
            .then((res)=>{
                console.log(res.data);
                navigate(`/product/detail/${productId}`)
            })
            .catch(err=>console.log(err))


        
    }

  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center items-center '>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}  className=' w-[450px] border bg-white rounded-2xl py-3 px-7'>

        <h1 className='text-center text-2xl'>Update Product</h1>

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
         <button  className='rounded bg-blue-400 text-white px-2.5 py-1'>Update Product</button>
       </div>
       <br />
      
      </form>
    </div>
  )
}

export default UpdateProduct
