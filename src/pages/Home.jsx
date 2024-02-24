import Menu from "../components/Menu";
import img1 from "../assets/img1.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <>
      <div className="md:flex justify-between">
        <div className="bg-blue p-16 flex flex-col gap-12 justify-center h-full basis-2/4">
          <div className="px-[10px]">
            <img src={logo} className=""/>
          </div>
          <p className="text-sand text-center">INICHI CUENTA CON EXCELENCIA, INNOVACION, TRABAJO EN CONJUNTO, COLABORATIVO, ETICO, TRANSPARENCIA Y RESPONSABILIDAD.</p>
          <div className="flex justify-center">
            <Link
              to='about'
              onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} 
              className="text-olive bg-sand p-2 text-center w-[130px]">
                Conoce más
            </Link>
          </div>
        </div>
        <div className="hidden md:block bg-white basis-2/4 fi">
         <img src={img1} className="max-w-full object-cover bg-fit h-full" />
        </div>
      </div>
      <div>
        <img src={img1} className="md:hidden"/>
      </div>
    </>
  )
};

export default Home;