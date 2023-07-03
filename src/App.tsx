// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Counter from './components/Counter'
import SigninFacebookGoogle from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'

function App() {

  return (
    <main>
    {/* <Counter/> */}
    <Navbar/>
    <SigninFacebookGoogle/>
    <Footer/>
    
    </main>
  )
}

export default App
