import { Link } from "react-router-dom";

const ModalItem = ({title, to, onClick }) => {
  return (
    <div className="flex justify-center flex-col text-white h-14 border-bottom hover:text-yellow">
      <Link to={to} onClick={onClick}>{title}</Link>
    </div>
  )
};



const Modal = ({ closeModal }) => {
  return (
    <>
      <div className='absolute top-10 left-0 w-full bg-blue'>
        <ModalItem title='Inicio' to='/' onClick={closeModal}/>
        <ModalItem title='Nosotros' to='/about' onClick={closeModal}/>
        <ModalItem title='Servicio' to='/services' onClick={closeModal}/>
        <ModalItem title='Contacto' to='/contact' onClick={closeModal}/>
      </div>
    </>
  )
};

export default Modal; 
