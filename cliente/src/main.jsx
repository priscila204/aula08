import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Header from './components'
import Footer from './components'
import  ListaProdutos from './componets'
import Registrar from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
       <Routes>

            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Registrar/>}/>
            <Route path="/produtos" element={<ListaProdutos/>}/>
            <Route path="/Registrar" element = {<Registrar/>}/>

       </Routes>
       <Footer/>
    </BrowserRouter>
  </StrictMode>
)
