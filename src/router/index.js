import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from '../Pages/AboutUs'
import Home from '../Pages/Home'
import Portfolio from '../Pages/Portfolio'
import Artikel from '../Pages/Artikel'
import Contact from '../Pages/Contact'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
            <Route path="/Portfolio" element={<Portfolio />}/>
            <Route path="/Artikel" element={<Artikel />}/>
            <Route path="/Contact" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router