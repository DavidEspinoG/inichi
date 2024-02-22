import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import Modal from "./Modal";
import { IoMdClose } from "react-icons/io";


const Menu = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="text-sand text-[30px]">
        {isModalOpen ? 
          <IoMdClose
            onClick={closeModal}
          /> :
          <RxHamburgerMenu
            onClick={openModal}
          />
        }
      </div>
      {/* {isModalOpen && <Modal closeModal={closeModal}/>} */}
    </>
  );
};

export default Menu;