
const DiaryItem = (props:any) => {
  return (
    <main className="mb-5 px-3  " >
      <section className="flex  ">
        <div className="mr-4">
            <img src={props.src} alt="images-pic"/>
        </div>
        <div className="">
            <p className="type text-[1.6em] font-[500] text-[black]  ">{props.title} </p>
            <p className="text-[1.2em] " >{props.date} </p>
            <p className="italic text-[black] " >{props.type} </p>
        </div>
        </section>
        <p className="italic text-[black] "> {props.content} </p> 
    </main>
  )
}
export default DiaryItem