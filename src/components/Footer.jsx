import { Link } from "react-router-dom";

const Footer = () => {

    return (
      <div className="bg-sand flex flex-col items-center justify-evenly gap-5 p-3">
        <Link to='/' className="text-olive uppercase text-lg">Inicio</Link>
        <Link to='about'  className="text-olive uppercase text-lg">Nosotros</Link>
        <Link to='services' className="text-olive uppercase text-lg">Servicios</Link>
        <Link to='contact' className="text-olive uppercase text-lg">Contáctanos</Link>
      </div>
    )
};

export default Footer;