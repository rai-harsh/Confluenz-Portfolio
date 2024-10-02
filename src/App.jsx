import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Front from './Front.jsx'
import Portfolio from './Portfolio.jsx'
import Testimonial from './Testimonial.jsx'
import Swipers from './Swipers.jsx'
import Slider from './Slider.jsx'
import HireUs from './HireUs.jsx'
import Footer from './Footer.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Front />
      <Portfolio />
      <Slider/> 
      <Swipers/>
      <HireUs/>
      <Testimonial/>
      <Footer/>
    </>
      
  )
}

export default App
