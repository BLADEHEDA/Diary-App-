import './App.css'
import SigninFacebookGoogle from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import { BrowserRouter,  Routes,Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter >
    <Navbar/>
    <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
