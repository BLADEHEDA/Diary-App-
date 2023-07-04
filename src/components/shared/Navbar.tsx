// import React from 'react'
import logo from "../../../public/Private Journal 2.png"

const Navbar = () => {
  return (
    <div className="bg-[#000] flex  py-3 px-5 justify-between  ">
        <div className="logo  ">
            <img src={logo} alt="logo" />
        </div>
        <p className=" text-[#FFF] text-[1.6em] font-[700] text-center  " >My Private Diary</p>
        <div className=" text-[#FFF]  ">
        </div>
    </div>
  )
}

export default Navbar