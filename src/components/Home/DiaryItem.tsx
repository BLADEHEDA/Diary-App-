import { useState } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faLock } from '@fortawesome/free-solid-svg-icons'
const DiaryItem = (props:any) => {
  return (
    <main className="mb-5 px-3  " >
      <section className="flex justify-between  ">
        <article className='flex' >   
        <div className="mr-4 mb-2">
            <img src={props.src} alt="images-pic" className=" w-[5em] h-[5em] "  />
        </div>
        <div className="">
            <p className="type text-[1.4em] font-[300] text-[black]  ">{props.title} </p>
            <p className="text-[1em] " >{props.timestamp}  </p>
            <div className="flex">  
            <p className="italic text-[black] " >{props.type} </p>
            <FontAwesomeIcon  className='text-[1em] text-[#F24E1E] mt-1 mx-2 ' icon={faLock} />

            </div>
           
        </div>
        </article>
        <article> 
        <div className=""><FontAwesomeIcon  className='text-[1.3em] text-[#F24E1E] mt-2 ' icon={faTrash} /></div>
        </article>
        </section>
        <p className="italic text-[black] "> {props.content} </p> 
    </main>
  )
}
export default DiaryItem