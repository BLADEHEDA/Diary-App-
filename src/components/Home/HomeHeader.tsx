// import React from 'react'
import Button from "../shared/Button"
import {  Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <main className="px-3 flex justify-between bg-[white]  ">
<div className=" font-[600]  text-[1.5em] mt-2 "> Welcome back</div>
<Link to ='form' className="">
    <Button
    style={{
        fontSize:'13px',
        paddingTop:'7px',
        paddingBottom:'7px',
     }}
    name="New entry" />
</Link>
{/* <div className="">{localStorage.getItem("name")} </div> */}
{/* <img src={localStorage.getItem("pic")} /> */}
    </main>
   )
}

export default HomeHeader