import { useState } from 'react'
import HomePage from './landing_page/Home/HomePage'
import Signup from './landing_page/Signup/Signup'
import SignupPage from './landing_page/Signup/SignupPage'
import LoginPage from './landing_page/login/LoginPage'
import AboutPage from './landing_page/About/AboutPage'
import ProductPage from './landing_page/Products/ProductPage'
import PricingPage from './landing_page/Pricing/PricingPage'
import SupportPage from './landing_page/Support/SupportPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './landing_page/Footer'
import Navbar from './landing_page/Navbar'
import NotFound from './landing_page/NotFound'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
   <div className="container">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/products' element={<ProductPage/>}></Route>
        <Route path='/pricing' element={<PricingPage/>}></Route>
        <Route path='/support' element={<SupportPage/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
      <Footer/>
      </BrowserRouter>
      {/* <SignupPage/> */}
      {/* <AboutPage/> */}
      {/* <ProductPage/> */}
      {/* <PricingPage/> */}
      {/* <SupportPage/> */}
   </div>
  )
}

export default App
