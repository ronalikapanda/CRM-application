import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Partners from './components/Partners/Partners.jsx'
import Resources from './components/Resources/Resources.jsx'
import Supports from './components/Supports/Supports.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='Pricing' element={<Pricing />} />
      <Route path='Partners' element={<Partners />} />
      <Route path='Resources' element={<Resources />} />
      <Route path='Supports' element={<Supports />} />
    
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
