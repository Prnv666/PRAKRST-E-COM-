import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'

import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kids_banner from './assets/banner_kids.png'


const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}></Route>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}></Route>
          <Route path='/product' element={<Product/>}>
            <Route path='/productId' element={<Product/>}> </Route>
          </Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<LoginSignup/>}></Route>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  )
}

export default App
