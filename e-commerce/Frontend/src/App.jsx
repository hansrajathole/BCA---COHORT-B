import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import CreateProduct from './pages/CreateProduct'
import ProductDetail from './pages/ProductDetail'
import Home from './pages/Home'
import UpdateProduct from './pages/UpdateProduct'

const App = () => {


  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/product/create' element={<CreateProduct/>}/>
        <Route path='/product/detail/:productId' element={<ProductDetail/>}/>
        <Route path='/product/update/:productId' element={<UpdateProduct/>}/>
        
      </Routes>
    </>
  )
}

export default App
