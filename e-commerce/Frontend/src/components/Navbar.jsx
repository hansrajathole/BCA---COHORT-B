import React from 'react'

const Navbar = () => {
  return (
    <div className='h-18 w-full bg-red-300 flex items-center justify-between px-5'>
      <h1 className='text-2xl '>Shoppy</h1>
      <div className="search border px-3 py-1 rounded-2xl w-[40%]">
        <input type="text" className='border-none outline-none w-[95%]'/>  
        <i className="ri-search-line"></i>
      </div>
    <div className='flex gap-2'>
         <button className='border px-2 py-1 rounded-xl'>Create</button>
         <button  className='border  px-2 py-1 rounded-xl'>Login</button>
    </div>
    </div>
  )
}

export default Navbar
