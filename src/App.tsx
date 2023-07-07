import './App.css'
import Home from './components/Aunthentcation /Home/Home'
import SigninFacebookGoogle, { ErrorPage } from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import { BrowserRouter,  Routes,Route} from "react-router-dom"




function App() {

  return (
    <BrowserRouter >
    <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    <Route path='Home' element={<Home/>}/> 
    <Route path="/error" element={<ErrorPage />} />
    </Routes>
    {/* <Home/> */}
    {/* <ErrorPage/> */}
    <Footer/>
    </BrowserRouter>
  )
}

export default App
