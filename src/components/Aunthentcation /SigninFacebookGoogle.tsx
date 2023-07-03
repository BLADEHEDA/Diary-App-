// import React from 'react'
import Button from '../shared/Button'
import Navbar from '../shared/Navbar'

const SigninFacebookGoogle = () => {
  return (
    <main  >
    <Navbar/>
    <div className="contetn px-5 text-center my-[7em] ">
      <div className="head text-[black] text-[1.6em] font-[600] ">Welcome tp private diary</div>
      <p className='text-[#000000FF]  text-[1.135em] mt-3 ' >Create private entries, log your activities update records
        and publish what you want the public to see</p>
    </div>
    <ul>
      <li className='text-[#000000FF] underline text-center mb-1' >GET STARTED </li>
    </ul>
    <div className="btns">
      <div className="btn">
        <Button name=" sign in with Facebook" />
      </div>
      <div className="btn">
      <Button name=" sign in with Google" />
      </div>
    </div>
    </main>
  )
}

export default SigninFacebookGoogle