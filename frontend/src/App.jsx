import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopContextProvider } from './Context/ShopContext'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSinup from './Pages/LoginSinup'
import './App.css'

function App() {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/mens" element={<ShopCategory category="mens" />} />
            <Route path="/womens" element={<ShopCategory category="womens" />} />
            <Route path="/kids" element={<ShopCategory category="kids" />} />
            <Route path="/product/:productId" element={<Product />} />
            <Route path="/login" element={<LoginSinup />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  )
}

export default App

