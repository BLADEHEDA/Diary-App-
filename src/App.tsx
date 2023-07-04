// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './components/Counter'
import SigninFacebookGoogle from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import { BrowserRouter,  Routes,Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter >
    {/* <Counter/> */}
    <Navbar/>
    <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    </Routes>
    <Footer/>
    
    </BrowserRouter>
  )
}

export default App
