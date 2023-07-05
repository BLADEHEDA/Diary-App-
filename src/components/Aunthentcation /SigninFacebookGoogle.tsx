import Button from '../shared/Button'
// subjected to changes 
import { GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { auth } from "../../firebase/firebase"

// {subjectd to changes }
const SigninFacebookGoogle = () => {
  // sign in with google
// subjected to changes , 
const provider = new GoogleAuthProvider();
const signInWithGoogle=()=>{
  alert('yo');
signInWithPopup(auth , provider )
.then((result)=>{
  alert('yo bro');
  console.log(result);
})
.catch((error) =>{
  if (error.code === 'auth/cancelled-popup-request') {
    console.log('Popup closed by user');
    // Show appropriate message to the user
  } else {
    console.log(error);
    // Show other error messages
  }
  
} );
};
// end of changes 
// sign in with facebook 
const signInWithFacebook=()=>{
  alert('yo');
}


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
      <div  onClick={signInWithFacebook}  className="btn">
        <Button name=" sign in with Facebook" />
      </div>
      <div onClick={signInWithGoogle} className="btn">
      <Button name=" sign in with Google" />
      </div>
    </div>
    </main>
  )
}

export default SigninFacebookGoogle