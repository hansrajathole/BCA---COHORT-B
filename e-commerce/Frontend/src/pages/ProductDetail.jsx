import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const ProductDetail = () => {

   const params =  useParams()
   const navigate = useNavigate()
    const [isTrue, setisTrue] = useState(false)
   const productId = params.productId
   const token = localStorage.getItem("token") 
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
            
        })
        .catch(err=>console.log(err))
    }

    const deleteHandler = (productId)=>{
        axios.delete(`http://localhost:4000/products/delete/${productId}`,{
          headers : {
            Authorization : `bearer ${token}`
          }
        })
        .then((res)=>{
          console.log(res.data);
          setisTrue((prev)=>!prev)
          navigate("/")
        })
        .catch(err=>console.log(err))
    }
    
  return (
    <div className='h-screen w-full bg-amber-100 flex justify-center items-center'>
        <div className=' w-[650px] border flex'>
          <div className="left w-[50%]">
            <img src={productData.image} alt="" className='w-full object-contain'/>
          </div>
          <div className='p-5 w-[50%] flex flex-col gap-3'>
            <h2 className='text-2xl font-semibold'>{productData.title}</h2>
            <p>{productData.description}</p>
            <h2 className='text-2xl font-semibold'>{productData.category}</h2>
            <h1 className='font-semibold text-xl'>price : {productData.price} </h1>
            <div className="button flex justify-between">
              <button
              onClick={()=>{
                setisTrue((prev)=>!prev)
              }}
              className='border px-2 py-1 rounded bg-red-500 text-white'>Delete</button>
              <button
              onClick={()=>{
                navigate(`/product/update/${productData._id}`)
              }}
              className='border px-2 py-1 rounded bg-blue-500 text-white'>Update</button>

            </div>
          </div>
        </div>
        {
          isTrue && <div className='absolute bg-gray-600 opacity-90 h-full w-full'>
            <div className='flex justify-center items-center h-full  '>
              <div className='w-[50%] relative opacity-100 p-7 rounded-2xl bg-black z-10'>
                <h2 className='text-white'>Worning!</h2>
                <p className='text-white'>do you want to delete this product?</p>
                <div className='flex justify-between py-2'>
                   <button
              onClick={()=>{
                setisTrue((prev)=>!prev)
              }}
              className='border px-2 py-1 rounded bg-red-500 text-white'>Cancle</button>
              <button
              onClick={()=>{
                deleteHandler(productId)
              }}
              className='border px-2 py-1 rounded bg-blue-500 text-white'>Yes</button>

                </div>
              </div>
            </div>
          </div>
        }
        
    </div>
  )
}

export default ProductDetail
