import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
const Home = () => {
   
    useEffect(() => {
        getProductData()
        
    }, [])
    
    const [productData, setproductData] = useState([])

    const getProductData =()=>{
        axios.get("http://localhost:4000/")
        .then((res)=>{
            console.log(res);
            setproductData(res.data.productData)
            
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }

  return (
    <div className='h-screen w-full bg-gray-200 p-7 flex gap-2 flex-wrap'>
        {
           productData && productData.map((product , index)=>{
               return <ProductCard product={product} />
            })
        }
    </div>
  )
}

export default Home
