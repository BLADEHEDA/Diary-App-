import React, { useState } from "react";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLock } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal"; // Assuming the Modal component is in the same directory

type DiaryItemProps = {
  src: string;
  title: string;
  timestamp: string;
  type: string;
  content: string;
  id: string;
  isPublic: boolean;
  onPrivacyToggle: (id: string, isPublic: boolean) => void;
};

const DiaryItem: React.FC<DiaryItemProps> = (props) => {
  const { id, isPublic, onPrivacyToggle } = props;
  const [checked, setChecked] = useState<boolean>(isPublic);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleChange = (checked: boolean) => {
    setChecked(checked);
    onPrivacyToggle(id, checked); // Update the privacy status in the Home component
  };
  const lockIconColor = props.type === "Public" ? "red" : "green";

    // Perform the delete action here
  const handleDelete = () => {
    console.log("Delete diary:", props.title);
    setShowModal(false);
  };

  return (
    <main className="mb-5 px-3  ">
      <section className="flex justify-between  ">
        <article className="flex">
          <div className="mr-4 mb-2">
            <img src={props.src} alt="images-pic" className=" w-[5em] h-[5em] " />
          </div>
          <div className="">
            <p className="type text-[1.4em] font-[300] text-[black]  ">{props.title} </p>
            <p className="text-[1em] ">{props.timestamp} </p>

            <div className="flex">
              <p className="italic text-[black] ">{checked ? "Public" : "Private"}</p>
              <FontAwesomeIcon
                className={`text-[1em] text-[${lockIconColor}] mt-1 mx-2`}
                icon={faLock}
              />
                    <FontAwesomeIcon
                    className={`text-[1em] text-[${lockIconColor}] mt-1 mx-2`}
                    icon={faLock}
                  />
              <p className="mt-1">
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  onColor="#4CAF50"
                  height={15}
                  width={30}
                />
              </p>
            </div>
          </div>
        </article>
        <article>
          <div
            className=""
            onClick={() => setShowModal(true)} // Show the modal on click
          >
            <FontAwesomeIcon className="text-[1.3em] text-[#F24E1E] mt-2 " icon={faTrash} />
          </div>
        </article>
      </section>
      <p className="italic text-[black] "> {props.content} </p>
      {/* Display the Modal when showModal is true */}
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onConfirm={handleDelete}
        />
      )}
    </main>
  );
};

export default DiaryItem;
