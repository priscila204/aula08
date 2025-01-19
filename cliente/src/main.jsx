import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
<<<<<<< HEAD
import Header from './components'
import Footer from './components'
=======
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5
import Registrar from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
       <Routes>
<<<<<<< HEAD
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Registrar/>}/>
=======
            <Route path="/" element={<Home/>}/>
            <Route path="/Registrar" element = {<Registrar/>}/>
>>>>>>> 0fe02435e19d499a55a103211b4ab2e2ec30b0f5
       </Routes>
       <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
