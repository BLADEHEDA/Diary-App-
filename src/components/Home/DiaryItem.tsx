import { useState } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faLock } from '@fortawesome/free-solid-svg-icons'

// Add type annotations for props
type DiaryItemProps = {
  src: string;
  title: string;
  timestamp: string;
  type: string;
  content: string;
};

const DiaryItem = (props: DiaryItemProps) => {
  const [checked, setChecked] = useState<boolean>(false);

  // Add type annotation for the checked parameter
  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  const lockIconColor = props.type === 'Public' ? 'red' : 'green';

  return (
    <main className="mb-5 px-3  " >
      <section className="flex justify-between  ">
        <article className='flex' >
          <div className="mr-4 mb-2">
            <img src={props.src} alt="images-pic" className=" w-[5em] h-[5em] " />
          </div>
          <div className="">
            <p className="type text-[1.4em] font-[300] text-[black]  ">{props.title} </p>
            <p className="text-[1em] " >{props.timestamp}  </p>

            <div className="flex">
              <p className="italic text-[black] " >{props.type} </p>
              <FontAwesomeIcon className={`text-[1em] text-[${lockIconColor}] mt-1 mx-2`} icon={faLock} />
              <p>
                <Switch
                  onChange={handleChange} checked={checked}
                  height={17} width={40} offColor="red" />
              </p>
            </div>

          </div>
        </article>
        <article>
          <div className=""><FontAwesomeIcon className='text-[1.3em] text-[#F24E1E] mt-2 ' icon={faTrash} /></div>
        </article>
      </section>
      <p className="italic text-[black] "> {props.content} </p>
    </main>
  )
}

export default DiaryItem;
