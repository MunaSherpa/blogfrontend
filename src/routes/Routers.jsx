import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../View/Login'
import Register from '../View/Register'
import SidebarAnother from '../View/component/SidebarAnother'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/navbar' element={<SidebarAnother />} />


    </Routes>
  )
}

export default Routers