import Home from './Pages/Home.jsx'
import Events from './Pages/Events.jsx'
import Photowalks from './Pages/Photowalks.jsx'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Walk from './Pages/Walk.jsx'
function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='Events' element={<Events/>}/>
        <Route path='Photowalks' element={<Photowalks/>}/> 
          <Route path='Photowalks/:walkId' element={<Walk/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
      
  ) 
}

export default App
