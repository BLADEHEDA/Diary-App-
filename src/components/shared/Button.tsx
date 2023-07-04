// import React from 'react'

const Button = (props:any) => {
  return (
    <main className="" >
    <button
    style={props.style}
    className="bg-[black] rounde-[10px] text-[white] font-[500] text-[1.2em] my-2  w-full " >
        {props.name}
        </button>
</main>
  )
}

export default Button
