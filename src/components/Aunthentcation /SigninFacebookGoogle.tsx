import Button from '../shared/Button'
// subjected to changes 
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from "../../firebase/firebase"

// {subjectd to changes }
const SigninFacebookGoogle = () => {
  // Sign in with google 
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async()=>{
    try{
      const result = await signInWithPopup( auth,googleProvider)
      console.log(result.user)
      alert(result.user)
    }
    catch(error) {
    console.log(error);
    alert(error)
    }
  }

// end of changes 


  return (
    <main className='px-5 overflow-hidden'>
    <div className="contetn  text-center my-[5em] ">
      <div className="head text-[black] text-[1.6em] font-[600] ">Welcome to private diary</div>
      <p className='text-[#000000FF]  text-[1.135em] mt-3 ' >Create private entries, log your activities update records
        and publish what you want the public to see</p>
    </div>
    <ul>
      <li className='text-[#000000FF] underline text-center mb-1' >GET STARTED </li>
    </ul>
    <div className="btns mb-[6.5em]">
      <div className="btn">
        <Button name=" sign in with Facebook" />
      </div>
      <div onClick={GoogleLogin} className="btn">
      <Button name=" sign in with Google" />
      </div>
    </div>
    </main>
  )
}

export default SigninFacebookGoogle