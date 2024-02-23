import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  };
    return (
      <div className="bg-sand flex flex-col items-center justify-evenly gap-5 p-3">
        <Link to='/' className="text-olive uppercase text-lg" onClick={scrollToTop}>Inicio</Link>
        <Link to='about'  className="text-olive uppercase text-lg" onClick={scrollToTop}>Nosotros</Link>
        <Link to='services' className="text-olive uppercase text-lg" onClick={scrollToTop}>Servicios</Link>
        <Link to='contact' className="text-olive uppercase text-lg" onClick={scrollToTop}>Contáctanos</Link>
      </div>
    )
};

export default Footer;