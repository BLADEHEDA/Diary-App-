// import React from 'react'

import Button from "../shared/Button"

const Form = () => {
  return (
    <div>
        <form action="">
         <div>
            <label htmlFor="">Description [required] </label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
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
  )
}

export default Form
