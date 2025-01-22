import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Header from "./components/Header";
import Footer from "./components/Footer";
import ListaProdutos from "./components/ListaProdutos";
import Alterar from './pages/Alterar'
import Registrar from './pages/Registro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
       <Routes>

            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<Registrar/>}/>
            <Route path='/alterar' element={<Alterar/>}/>
            <Route path="/produtos" element={<ListaProdutos/>}/>
            <Route path="/Registrar" element = {<Registrar/>}/>

       </Routes>
       <Footer/>
    </BrowserRouter>
  </StrictMode>
)
