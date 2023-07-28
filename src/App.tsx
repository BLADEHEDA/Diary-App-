import './App.css'
import Home from './components/shared/Home'
import SigninFacebookGoogle, { ErrorPage } from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import { BrowserRouter,  Routes,Route} from "react-router-dom"
// import Parent from './components/Home/Parent'

import Form from './components/Home/Form'

// https://www.freeprivacypolicy.com/live/120dc8c2-151f-4b7c-b60b-
// https://www.freeprivacypolicy.com/live/120dc8c2-151f-4b7c-b60b-1784091c769c

function App() {

  return (
    <BrowserRouter  >
    <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    <Route path='diary' element={<Home/>}/> 
    <Route path="error" element={<ErrorPage />} />
     <Route path="diary/[create diary]" element={<Form/>} /> 
    <Route path="*" element={<Home />} /> 
    </Routes>
    <Footer/>
    {/* <div className="">
      <Parent/>
    </div> */}
    </BrowserRouter>
  )
}

export default App
