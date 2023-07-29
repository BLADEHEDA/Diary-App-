import { useState } from "react"


const Child = ({onSubmit}) => {
    const [input , setInput]= useState('')
    const handleChange =(e)=>{
        setInput(e.target.value)
        console.log(input);
       onSubmit(input)
     }
     const handleSubmit=(e)=>{
        e.preventDefault()
       onSubmit(input)
    }
  return (
    <div>
           <p>here is the childe component </p>
           <form action="" onSubmit={handleSubmit} >
        <input className="border border-black" type="text" value={input} onChange={handleChange}  />
        <button  className="border border-black">click</button>
      </form>
    </div>
  )
}

export default Child


