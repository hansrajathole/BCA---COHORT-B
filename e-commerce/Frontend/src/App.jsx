import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'

const App = () => {


  return (
    <>
      <Navbar/>

      <Routes>
        <Route path='/' element={<h1>Hello</h1>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<h1>register page</h1>}/>
      </Routes>
    </>
  )
}

export default App
