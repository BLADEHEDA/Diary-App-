// import React from 'react'

import Button from "../shared/Button"
import Navbar from "../shared/Navbar"
// import vector from "../../assets/Vector.png"

const Form = () => {
  return (
   <main className="w-full" >  
      <Navbar 
      head='New entry' 
      vector= {localStorage.getItem("pic")}
       />
      <div className="flex px-5 justify-between text-[black] mt-3 ">
         <div className="font-[600]  text-[1.65em] ">Create new diary</div>
         <div className="font-[600] text-[1.75em]">x</div>
      </div>
    <div className="w-full">
        <form action="" className=" px-5 " >
            {/* select input field  */}
            <article className="mb-4" >  
            <div className="mb-2">
            <label htmlFor="" className="text-[1.25em] italic text-black " >Category</label>
            </div>
            <select 
            className="w-[100%] border-[0.2px]  px-2 py-4 text-black text-[1em]
            rounded-[5px]  border-black border-solid "  
             name="Category" placeholder="Category" >
               <option className="w-[10%] " value="">Fun</option>
               <option  className="w-[10%] " value="">Home</option>
               <option className="w-[10%] " value="">Family</option>
              <option value="">Spriritual</option>
               <option value="">Health</option>
               <option value="">School</option>
               <option value="">Work</option>
               <option value="">Others</option> 
             </select>
             </article>
           {/* descritpion input field  */}
           <article className="mb-4" >
            <div className="mb-2">
            <label className="text-[1.25em] italic text-black " >Description</label>
            </div>
            <textarea 
              placeholder="Enter description here"
            className="w-full  border border-black bprer-solid  px-3
            rounded-[5px] h-[8em] " ></textarea>
           </article>
         {/* image uplad field */}
         <article className="mb-4" >
            <div className="mb-2">
            <label className="text-[1.25em] italic text-black " >Upload image (optional)</label>
            </div>
            <textarea 
            className="w-full  border border-black bprer-solid 
            rounded-[5px] h-[8em] " ></textarea>
           </article>



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
