import Button from '../shared/Button'
import { GoogleAuthProvider,signInWithPopup,FacebookAuthProvider } from 'firebase/auth';
import { auth } from "../../firebase/firebase"
import Navbar from '../shared/Navbar';
import { useNavigate } from 'react-router-dom';
// import { localStorage } from 'windo


// {subjectd to changes } 
export  const ErrorPage = () => {
  return (<main>
      <Navbar head="Error" />
    <div className="bg-[white] px-3 py-3"> 
    Error: Unable to sign in with Google
    </div>
    </main>)
};
export const SigninFacebookGoogle = () => {
  const navigate = useNavigate();
  // sign in with google
const provider = new GoogleAuthProvider();
const signInWithGoogle=()=>{
signInWithPopup(auth , provider )
.then((result)=>{
  console.log(result);
      const name = result.user.displayName
      const pic = result.user.photoURL
      console.log(pic);
      console.log(result.user.email); 
      // store the date to avoid refreshing all the times 
      if (name && pic !== null) {
        localStorage.setItem("name", name);
        localStorage.setItem("pic", pic);
              // navogate to another page whe successf
        navigate('/journal'); 
      } else {
              // navogate to another page whe successf
        navigate('/journal');
      }
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
  provider.addScope('email')
  signInWithPopup(auth , provider )
  .then((result)=>{
    console.log(result);
        navigate('/journal'); 
  })
  .catch((error) =>{
      console.log(error);
       navigate('/error'); 
  } );
}
  return (
    <main className=' home  ' >
      <section className=" lg:w-[30%] bg-[white] " > 
        <Navbar head="My Private Diary" />
    <section className='px-5 overflow-hidden bg-[white]'>
    <div className="contetn  text-center my-[5em] ">
      <div className="head text-[black] text-[1.6em] font-[600] ">Welcome to private diary</div>
      <p className='text-[#000000FF]  text-[1.135em] mt-3 ' >Create private entries, log your activities update records
        and publish what you want the public to see</p>
    </div>
    <ul>
      <li className='text-[#000000FF] underline text-center mb-1' >GET STARTED </li>
    </ul>
    <div className="btns mb-[8em]">
      <div  onClick={signInWithFacebook}  className="btn">
        <Button name=" sign in with Facebook" />
      </div>
      <div onClick={signInWithGoogle} className="btn">
      <Button name=" Sign in with Google" />
      </div>
    </div>
    </section>
    </section>
    </main>
  )
}
export default SigninFacebookGoogle