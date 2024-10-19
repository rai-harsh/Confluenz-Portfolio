import Navbar from '../Components/Navbar.jsx'
import Front from '../Components/Front.jsx'
import Portfolio from '../Components/Portfolio.jsx'
// import Testimonial from '../Components/Testimonial.jsx'
import Swipers from '../Components/Swipers.jsx'
import Slider from '../Components/Slider.jsx'
import HireUs from '../Components/HireUs.jsx'
 import Footer from '../Components/Footer.jsx'

export default function Home() {

  return (
    <>
      <Navbar />
      <Front />
      <Portfolio />
      <Slider/> 
      <Swipers/>
      <HireUs/>
      {/* <Testimonial/> paths have to be fixed here */}
      <Footer/>
    </>
      
  )
}