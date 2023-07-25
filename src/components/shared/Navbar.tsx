import React, { useState } from 'react';
import logo from "../../assets/Private Journal 2.png";
import SignoutModal from '../Home/SignoutModal';

interface NavbarProps {
  head: string;
  vector: string;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    // setShowModal((prev) => !prev);
    setShowModal(true)
  };

  return (
    <div className="bg-[#000] flex py-3 px-6 justify-between">
      <div className="logo cursor-pointer" >
        <img src={logo} alt="logo" />
      </div>
      <p className="text-[#FFF] text-[1.6em] font-[700] text-center">{props.head}</p>
      <div className="text-[#FFF]" onClick={handleToggleModal}>
        <img src={props.vector} alt="" className="w-[2.5em] h-[2.5em] rounded-[50%]" />
      </div>
      <SignoutModal showModal={showModal} onCloseModal={() => setShowModal(false)} />
    </div>
  );
};

export default Navbar;
