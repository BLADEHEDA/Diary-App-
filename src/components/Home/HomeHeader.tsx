// import React from 'react'

import Button from "../shared/Button"

const HomeHeader = () => {
  return (
    <main className="px-3 flex justify-between bg-[white]  ">
<div className=" font-[600]  text-[1.5em] mt-2 "> Welcome back</div>
<div className="">
    <Button
    style={{
        fontSize:'13px',
        paddingTop:'7px',
        paddingBottom:'7px',
     }}
    name="New entry" />
</div>
    </main>
   )
}

export default HomeHeader