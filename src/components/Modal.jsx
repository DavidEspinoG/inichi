import { Link } from "react-router-dom";

const ModalItem = ({title, to, onClick }) => {
  return (
    <Link to={to} onClick={onClick}>
      <div className="flex justify-center flex-col text-blue h-14 border-bottom hover:text-olive">
        {title}
      </div>
    </Link>
  )
};



const Modal = ({ closeModal }) => {
  return (
    <>
      <div className='absolute top-20 left-[40px] w-[150px] bg-sand rounded-lg p-3'>
        <ModalItem title='Inicio' to='/' onClick={closeModal}/>
        <ModalItem title='Nosotros' to='/about' onClick={closeModal}/>
        <ModalItem title='Servicio' to='/services' onClick={closeModal}/>
        <ModalItem title='Contacto' to='/contact' onClick={closeModal}/>
      </div>
    </>
  )
};

export default Modal; 
