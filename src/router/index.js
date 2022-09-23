import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from '../components/AboutUs'
import Home from '../components/Home'
import Portfolio from '../components/Portfolio'
import Artikel from '../components/Artikel'
import Contact from '../components/Contact'

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