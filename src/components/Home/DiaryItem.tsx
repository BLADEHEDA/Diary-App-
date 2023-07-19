
const DiaryItem = (props:any) => {
  return (
    <main className="mb-5 px-3  " >
      <section className="flex  ">
        <div className="mr-4 mb-2">
            <img src={props.src} alt="images-pic" className=" w-[5em] h-[5em] "  />
        </div>
        <div className="">
            <p className="type text-[1.4em] font-[300] text-[black]  ">{props.title} </p>
            <p className="text-[1em] " >{props.timestamp}  </p>
            <p className="italic text-[black] " >{props.type} </p>
          
        </div>
        </section>
        <p className="italic text-[black] "> {props.content} </p> 
    </main>
  )
}
export default DiaryItem