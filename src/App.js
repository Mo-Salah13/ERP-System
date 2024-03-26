import React from 'react'
import Layout from './Component/Layout/Layout'
import Register from './Component/Register/Register'
import Login from './Component/Login/Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './Component/NotFound/NotFound'
import Home from './Component/Home/Home'
import Company from './Component/Company/Company'

let routers = createBrowserRouter([
  {
    path: '/', element: <Layout />, children: [
      { path:'login', element: <Login/> },
      { path: 'register', element: <Register /> },
      { path: 'home', element: <Home /> },
      { path: 'company', element: <Company /> },
      { path: '*', element: <NotFound /> },
    ]
  }
])
export default function App() {
  

  return <>
    <RouterProvider router={routers}></RouterProvider>
  </>
}
