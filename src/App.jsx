import { useState } from 'react'
import Navbar from './Navbar.jsx'
import Front from './Front.jsx'
import Portfolio from './Portfolio.jsx'
import Testimonial from './Testimonial.jsx'
import Swipers from './Swipers.jsx'
import Slider from './Slider.jsx'

function App() {

  return (
    <>
      <Navbar />
      <Front />
      <Portfolio />
      <Slider/> 
      <Swipers/>
      <Testimonial/>
    </>
      
  )
}

export default App
