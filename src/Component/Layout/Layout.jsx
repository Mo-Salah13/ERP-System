import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navbar/Navbar'

export default function Layout() {
  return <>
<Navbar/>
  <div className='container my-5 py-3'>
    <Outlet />
  </div>
 
</>
}
