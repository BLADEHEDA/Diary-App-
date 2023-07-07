import Button from '../shared/Button'
import { GoogleAuthProvider,signInWithPopup,FacebookAuthProvider } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import Navbar from '../shared/Navbar';
import { useNavigate } from 'react-router-dom';

// {subjectd to changes } 
export  const ErrorPage = () => {
  return (<main>
      <Navbar head="Error" />
    <div className=""> 
    Error: Unable to sign in with Google
    </div>
    </main>)
};
const SigninFacebookGoogle = () => {
  const navigate = useNavigate();
  // sign in with google
const provider = new GoogleAuthProvider();
const signInWithGoogle=()=>{
signInWithPopup(auth , provider )
.then((result)=>{
  console.log(result);
      const user = result.user;
      console.log(user.email); 
      // navogate to another page whe successful 
      navigate('/Home'); 
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
// sign in with facebook 
const signInWithFacebook=()=>{
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth , provider )
  .then((result)=>{
    console.log(result);
        navigate('/Home'); 
  })
  .catch((error) =>{
      console.log(error);
       navigate('/error'); 
  } );
}


  return (
    <main className='' >
        <Navbar head="My Private Diary" />
    <main className='px-5 overflow-hidden bg-[white]'>
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