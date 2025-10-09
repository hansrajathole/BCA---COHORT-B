import React from 'react'

const productCard = ({product}) => {

    console.log(product);
    
  return (
    <div className='h-[350px] w-[300px] border'>
      <div className="top h-[60%] flex justify-center">
        <img
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
