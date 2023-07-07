// import React from 'react'
import logo from "../../assets/Private Journal 2.png"

const Navbar = (props:any) => {
  return (
    <div className="bg-[#000] flex  py-3 px-5 justify-between  ">
        <div className="logo  cursor-pointer ">
            <img src={logo} alt="logo" />
        </div>
        <p className=" text-[#FFF] text-[1.6em] font-[700] text-center  " >{props.head} </p>
        <div className=" text-[#FFF]  ">
        </div>
    </div>
  )
}

export default Navbar