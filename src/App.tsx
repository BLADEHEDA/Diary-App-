import './App.css'
import Home from './components/shared/Home'
import SigninFacebookGoogle, { ErrorPage } from './components/Aunthentcation /SigninFacebookGoogle'
import Footer from './components/shared/Footer'
import { BrowserRouter,  Routes,Route} from "react-router-dom"
import Form from './components/Home/Form'

// https://www.freeprivacypolicy.com/live/120dc8c2-151f-4b7c-b60b-
// https://www.freeprivacypolicy.com/live/120dc8c2-151f-4b7c-b60b-1784091c769c

function App() {

  return (
    <BrowserRouter  >
    <Routes> 
    <Route path='/' element={<SigninFacebookGoogle/>}/> 
    <Route path='/journal' element={<Home/>}/> 
    <Route path="/rror" element={<ErrorPage />} />
     <Route path="/journal/[create journal]" element={<Form/>} /> 
    <Route path="*" element={<Home />} /> 
    </Routes>
    {/* <Home/> */}
    {/* <ErrorPage /> */}
    {/* <Form/> */}
    <Footer/>
    </BrowserRouter>
  )
}

export default App
