// import React from 'react'

import Button from "../shared/Button"
import Navbar from "../shared/Navbar"
import vector from "../../assets/Vector.png"

const Form = () => {
  return (
   <main>  
      <Navbar head='New entry' vector={vector } />
      <div className="flex px-5 justify-between text-[black] mt-3 ">
         <div className="font-[600]  text-[1.65em] ">Create new diary</div>
         <div className="font-[600] text-[1.75em]">x</div>
      </div>
    <div>
        <form action="" className=" px-5 " >
         <div>
            <label htmlFor="">Description [required] </label>
            <textarea name="" id=""></textarea>
         </div>
         <div>
            <label htmlFor="">Image (optional)</label>
            <input type="file" />
         </div>
         <section>
            <label htmlFor="">Category (optional)</label>
            <div className="flex" >  
            <div>
                <label htmlFor="">Public</label>
                <input type="radio" />
            </div>
            <div>
                <label htmlFor="">Private</label>
                <input type="radio" />
            </div>
            </div>
         </section>
         <div>
            <label htmlFor="Date(optional)"></label>
            <input type="date" />
         </div>
         <div>
         </div>
         <div className="btn">
            <Button/>
         </div>
        </form>
      
    </div>
    </main>
  )
}

export default Form
