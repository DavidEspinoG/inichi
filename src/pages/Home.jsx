import Menu from "../components/Menu";
// import img1 from "../assets/img1.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="bg-blue custom custom-calc w-screen">
      <div className="p-10 flex flex-col gap-12 justify-center h-full">
        <img src={logo} />
        <p className="text-sand text-center">INICHI CUENTA CON EXCELENCIA, INNOVACION, TRABAJO EN CONJUNTO, COLABORATIVO, ETICO, TRANSPARENCIA Y RESPONSABILIDAD.</p>
        <div className="flex justify-center">
          <Link
            to='about' 
            className="text-olive bg-sand p-2 text-center w-[130px]">
              Conoce más
          </Link>
        </div>
          
      </div>
      {/* <div>

      </div> */}
    </div>
  )
};

export default Home;