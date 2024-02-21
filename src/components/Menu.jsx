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
      <div className='flex justify-between py-3'>
        <div className='flex justify-center w-full'>
        </div>
        <div className="text-sand">
          {isModalOpen ? 
            <IoMdClose className='hamburger-menu'
              onClick={closeModal}
            /> :
            <RxHamburgerMenu 
              className='hamburger-menu'
              onClick={openModal}
            />
          }
          
        </div>
      </div>
      {isModalOpen && <Modal closeModal={closeModal}/>}
    </>
  );
};

export default Menu;