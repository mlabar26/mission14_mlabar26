import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar'

//Provides navbar throughout all pages
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout
