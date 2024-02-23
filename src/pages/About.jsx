import TextContainer from '../components/TextContainer';
import img2 from '../assets/img2.png';

const About = () => {
  
  return (
    <>
      <TextContainer
        variant='sand' 
        title='Nosotros'
        baseText='Somos un equipo constituido por mentes en desarrollo profesional con ideas innovadoras y frescas que satisfacen sus necesidades tecnológicas.'
        additionalText={[
          'Gracias a la destreza en el desarrollo de sistemas del equipo de colaboradores, la excelencia y certeza de nuestros productos nos han destacado como una de las empresas clave en servicios de TI, headhunting, fabricación de software, ciberseguridad, servicios de la nube y staffing especializado en perfiles de TI para varios de nuestros aliados estratégicos. ',
          'Somos una empresa 100% mexicana que cuenta con un extenso grupo de especialistas que gracias a su capacidad y experiencia en todos los servicios de TI, brindan las mejores prácticas de la industria y garantizan la mejor solución para asegurar la operación, calidad y eficacia de los procesos cruciales de su negocio, contribuyendo al propósito de lograr una rentabilidad superior del mismo. '
        ]}
      />
      <TextContainer 
        variant='blue'
        title='Qué ofrecemos'
        baseText='Crear soluciones innovadoras en tecnología de información, proporcionando a nuestros clientes la excelencia en medios confiables para optimizar sus procesos. Ampliar la competitividad y triunfo de nuestros clientes mediante la gestión, diseño, evolución y ejecución de soluciones y servicios de tecnologías de la información; así como cumplir y superar las exigencias de TI de nuestros clientes convirtiéndolos en resultados.'
      />
      <div>
        <img src={img2}/>
      </div>
      <div className="bg-blue text-center p-7">
        <div>
          <h1 className="text-olive uppercase text-2xl mb-5">Nuestro objetivo</h1>
          {/* ToDo: agregar logo */}
        </div>
        <p className="text-white font-thin">Ser una compañía reconocida por su alta calidad en la creación e integración de soluciones en tecnología de información respaldada por la experiencia de nuestro grupo de trabajo y la confianza de nuestros clientes. </p>
        <br/>
        <p className='text-white font-thin'>Estamos buscando seleccionar personal altamente especializado para unirse a nuestro equipo. Los candidatos ideales deberán poseer habilidades y experiencia específicas, así como una sólida comprensión de los proyectos a desarrollar. </p>
        <br/>
        <p className='text-white font-thin'>Buscamos individuos motivados, proactivos y capaces de trabajar tanto de forma independiente como en equipo. Además, valoramos la capacidad de adaptación, la creatividad y el compromiso con la excelencia en el trabajo.  </p>
      </div>
    </>
  )
};

export default About;