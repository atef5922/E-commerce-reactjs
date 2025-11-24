import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopContextProvider } from './Context/ShopContext'
import Navbar from './Components/Navbar/Navbar'
import './App.css'

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/mens" element={<div>Men's Products</div>} />
            <Route path="/womens" element={<div>Women's Products</div>} />
            <Route path="/kids" element={<div>Kids Products</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
            <Route path="/cart" element={<div>Cart Page</div>} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App

