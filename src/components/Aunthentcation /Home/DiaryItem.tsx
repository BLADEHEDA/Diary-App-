// import React from 'react'

const DiaryItem = (props:any) => {
  return (
    <main>
        <div className="">
            <img src="" alt="" />
        </div>
        <div className="">
            <p className="type">{props.title} </p>
            <p>{props.date} </p>
            <p>{props.type} </p>
        </div>
    </main>
  )
}

export default DiaryItem