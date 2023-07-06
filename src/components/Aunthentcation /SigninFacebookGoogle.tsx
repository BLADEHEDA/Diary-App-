import Button from '../shared/Button'
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import Navbar from '../shared/Navbar';

import { useNavigate } from 'react-router-dom';



// {subjectd to changes } 
export  const ErrorPage = () => {
  return <div>Error: Unable to sign in with Google</div>;
};
const SigninFacebookGoogle = () => {
  const navigate = useNavigate();
  // sign in with google
// subjected to changes , 
const provider = new GoogleAuthProvider();
const signInWithGoogle=()=>{
signInWithPopup(auth , provider )
.then((result)=>{
  console.log(result);
      const user = result.user;
      console.log(user.email); 
      navigate('/Home'); 
      // IdP data available using getAdditionalUserInfo(result)
})
.catch((error) =>{
  if (error.code === 'auth/cancelled-popup-request') {
    console.log('Popup closed by user');
    // Show appropriate message to the user
  } else {
    console.log(error);
     navigate('/error'); 
  }
  
} );
};
// end of changes 
// sign in with facebook 
const signInWithFacebook=()=>{
  alert('yo');
}


  return (
    <main>
        <Navbar head="My Private Diary" />
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
      <div  onClick={signInWithFacebook}  className="btn">
        <Button name=" sign in with Facebook" />
      </div>
      <div onClick={signInWithGoogle} className="btn">
      <Button name=" sign in with Google" />
      </div>
    </div>
    </main>
    </main>
  )
}

export default SigninFacebookGoogle