import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

const Menu = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(true);
  return (
    <div className='flex justify-between py-3'>
      <div className='flex justify-center w-full'>
        <h3 className='text-white '>Logo aquí</h3>
      </div>
      <div>
        <RxHamburgerMenu 
          className='hamburger-menu'
          onClick={() => setIsModalOpen((current) => !current )}
        />
      </div>
    </div>
  );
};

export default Menu;