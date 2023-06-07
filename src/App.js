import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import './styles/Header.scss'
import './styles/App.scss'
import './styles/Home.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/mediaquery.scss'


import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Brands from './components/Brands'
import Services from './components/Servisec'
import Footer from './components/Footer'


export default function App() {
  return (
<Router>
<Header/>
  <Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/brands' element={<Brands/>}/>
    <Route path='/services' element={<Services/>}/>
  </Routes>
  <Footer/>
</Router>
    )
}
