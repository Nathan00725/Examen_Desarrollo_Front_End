/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import { Home } from "./components/Home"
import { NavBar } from "./components/Navbar"
import { Rifle_Asalto } from "./components/Rifle_Asalto"
import { Subfusil } from "./components/Subfusil"
import { Sub_F_1 } from "./components/Sub_F_1"
import { Escopeta } from "./components/Escopeta"
import { Presicion } from "./components/Presicion"
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer } from "./components/Footer"



function App() {

  return (
    <>
  
  <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
         
        <Route path='/src/components/Home.jsx' element={<Home/>} ></Route>
        <Route path='/src/components/Rifle_Asalto.jsx' element={ <Rifle_Asalto/> }></Route>
        <Route path='/src/components/Subfusil.jsx' element={ <Subfusil/> }></Route>
        <Route path='/src/components/Escopeta.jsx' element={ <Escopeta/> }></Route>
        <Route path='/src/components/Presicion.jsx' element={ <Presicion/> }></Route>
        <Route path='/src/components/Subfusil.jsx./components/Sub_F_1' element={ <Sub_F_1/> }></Route>
        </Routes>

        <Footer></Footer>        
      </BrowserRouter>
    </>
  )
}

export default App
