import React from 'react'
import { useNavigate } from 'react-router-dom';
const productCard = ({product}) => {

  const navigate = useNavigate()
    console.log(product);
    
  return (
    <div className='h-[350px] w-[300px] border'>
      <div className="top h-[60%] flex justify-center">
        <img
        onClick={()=>{
          navigate(`/product/detail/${product._id}`)
        }}
         className='h-full w-auto'
        src={product.image} alt="" />
      </div>
      <div className="bottom p-2.5">
        <h2 className='text-2xl font-semibold'>{product.title}</h2>
        <div className='flex justify-between text-xl '>
            <h2>price : ₹{product.price}</h2>
            <p>{product.category}</p>
        </div>
      </div>
    </div>
  )
}

export default productCard
