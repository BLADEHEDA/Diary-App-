import './App.css'
import Home from './components/Aunthentcation /Home/Home'
import SigninFacebookGoogle, { ErrorPage } from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import { BrowserRouter,  Routes,Route} from "react-router-dom"

// https://www.freeprivacypolicy.com/live/120dc8c2-151f-4b7c-b60b-
// https://www.freeprivacypolicy.com/live/120dc8c2-151f-4b7c-b60b-1784091c769c


function App() {

  return (
    <BrowserRouter  >
    <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    <Route path='Home' element={<Home/>}/> 
    <Route path="/error" element={<ErrorPage />} />
    </Routes>
    {/* <Home/> */}
    <Footer/>
    </BrowserRouter>
  )
}

export default App
