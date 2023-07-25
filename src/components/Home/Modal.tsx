import React from "react";
import danger from "../../../public/mdi_alert.png"

type ModalProps = {
  onClose: () => void;
  onConfirm: () => void;
};

const Modal: React.FC<ModalProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center 
    bg-black bg-opacity-50 z-50">
      <div className="bg-white  pb-[4em]  shadow-md m-5 z-50">
        <div className="text-2xl py-4  mb-5 text-center  text-[white]  bg-[#F24E1E] font-[600]">Delete #2 </div>
       <div className="px-5">
        <div className=" flex justify-center my-5">
            <img src={danger} alt="danger" />
        </div>
        <p className="text-[1.6em] leading-[30px] text-center  mb-6 text-[#F24E1E] font-[600] ">
            Are you sure  you want to delete this diary entry?</p>
        <div className="flex justify-center">
        <button
            className="px-[2.5em] py-3  text-white rounded-2 bg-[black] text-[white] text-[1.3em] mr-2"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="px-[2.5em] py-3 bg-white text-[red] border-1 border-[#F24E1E] rounded-2 ml-2 text-[1.3em] "
            onClick={onConfirm}
          >
            Yes
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
