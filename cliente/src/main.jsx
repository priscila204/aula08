import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components'
import Footer from './components'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
       <Routes>
            <Route path="/" element={<Home/>}/>
       </Routes>
       <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
