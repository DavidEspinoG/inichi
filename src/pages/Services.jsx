import TextContainer from "../components/TextContainer";
import img2 from '../assets/img2.png';
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="bg-sand pt-5 pb-5">
        <h1 className="text-olive uppercase text text-2xl text-center mb-5">Catálogo de servicios</h1>
        <div className="flex flex-col justify-evenly items-center gap-5">
          <Link to='/services/#servicio_especializado' className="text-olive uppercase text-xl" reloadDocument >servicio especializado</Link>
          <Link to='/services/#desarrollo_ti' className="text-olive uppercase text-xl" reloadDocument>desarrollo ti</Link>
          <Link to='/services/#fabrica' className="text-olive uppercase text-xl" reloadDocument>fabrica de software</Link>
          <Link to='/services/#headhunting' className="text-olive uppercase text-xl" reloadDocument>headhunting</Link>
          <Link to='/services/#cyber' className="text-olive uppercase text-xl" reloadDocument>ciberseguridad</Link>
          <Link to='/services/#cloud' className="text-olive uppercase text-xl" reloadDocument>servicio en la nube</Link>
        </div>
      </div>
      <TextContainer 
        title='Servicio especializado'
        variant='blue'
        baseText='Ampliamos las oportunidades de crecimiento empresarial mediante la introducción de tecnologías innovadoras con la máxima excelencia, habilidades y la suma de talento humano plenamente capacitado para satisfacer las demandas de nuestros clientes, impulsando así el progreso empresarial.'
        additionalText={[
          'Contamos con un equipo altamente calificado para que puedan seleccionar a la mejor calidad de personal teniendo las características mas avanzadas para la selección, para que así los mejores prospectos cumplan todas la características y necesidades que nos soliciten.',
          'Nos concentramos en encontrar candidatos con las mejores habilidades, así como la mejor colaboración en equipo e individual en un tiempo récord.'
        ]}
        id='servicio_especializado'
      />
      <div>
        <img src={img2}/>
      </div>
      <TextContainer 
        title='Desarrollo ti'
        variant='blue'
        baseText='En la actualidad, ofrecemos una gama de servicios especializados en el avance empresarial, ofreciendo un conjunto de oportunidades que contribuirán al desarrollo de tu empresa junto con la gestión de tu personal para abordar las necesidades en el ámbito de los recursos humanos, servicios de TI y otros procesos comerciales.'
        additionalText={[
          'Tecnología: Te proporcionamos la última tecnología, adaptada a tus requerimientos.INICHI es un conjunto de profesionales con amplia experiencia en Tecnologías de la Información.',
          'INICHI ofrece un riguroso sistema en el proceso de reclutamiento y selección de personal.', 
        ]}
        id='desarrollo_ti'
      />
      <div>
        <img src={img2}/>
      </div>
      <TextContainer 
        title='Fábrica de software'
        variant='blue'
        baseText='El respaldo que le ofrece INICHI no queda reflejado únicamente en el software desarrollado como producto final, sino que vamos más allá, analizamos sus procesos para entender sus necesidades y de esta manera optimizarlos juntos. '
        additionalText={[
          'Si sus necesidades no pueden ser satisfechas por un software estándar, nosotros podemos crearle una solución a medida de sus necesidades, analizaremos sus necesidades, determinaremos juntos las mejores prácticas que podemos integrar y le desarrollaremos una solución integral que apoye la operación de su negocio. Si lo que el cliente busca es adoptar nuevas formas de trabajar incorporando la tecnología, le ofrecemos asesoramiento tecnológico, lo que redundará en el beneficio de completar sus tareas en un lapso de tiempo más corto y de la manera más eficaz.',
          'Trabajamos con todo tipo de plataformas, en servidores podemos ofrecerle soluciones montadas sobre Linux o cualquier otra variante de Unix, incluso si así lo requiere podemos montar soluciones sobre Windows.',
          ' En plataformas de desarrollo podemos ofrecerle desarrollos en cualquier lenguaje de desarrollo. Si las necesidades son aplicaciones para dispositivos móviles podemos ofrecerle desarrollos para dispositivos con sistema operativo Android y iOS.' 
        ]}
        id='fabrica'
      />
      <div>
        <img src={img2}/>
      </div>
      <TextContainer 
        title='Headhunting'
        variant='blue'
        baseText='En el fascinante universo del headhunting, el arte de encontrar talento excepcional se fusiona con estrategias de reclutamiento excepcionales. Exploramos, identificamos y atraemos a los profesionales más destacados para las empresas. Descubrimos las claves del proceso, las diferencias con el reclutamiento tradicional y cómo esta práctica eleva el estándar en la búsqueda de talento.'
        additionalText={[
          'Desde las etapas involucradas hasta la distinción entre headhunters y reclutadores, nos sumergimos en un mundo de estrategias y secretos detrás de la adquisición de los mejores talentos en el mercado laboral.',
          'Nosotros ofrecemos el encontrar a los mejores profesionales, contamos con un servicio de reclutamiento y de procesos de búsquedas especializadas de profesionales en TI.'
        ]}
        id='headhunting'
      />
      <div>
        <img src={img2}/>
      </div>
      <TextContainer 
        title='Ciberseguridad'
        variant='blue'
        baseText='La ciberseguridad es el conjunto de prácticas destinadas a proteger sistemas, redes y programas de ataques digitales. Estos ataques suelen tener como objetivo acceder, modificar o destruir información confidencial, extorsionar a usuarios o interrumpir la continuidad del negocio.'
        additionalText={[
          'En la actualidad, la adopción de medidas de seguridad digital es fundamental debido al incremento en el número de dispositivos conectados, superando incluso la cantidad de personas y a la creciente creatividad de los atacantes.',
          'Nuestro equipo cuenta con grandes expertos en ciberseguridad los cuales su empresa estará completamente tranquila de cualquier tipo de ataque cibernético. Ya que contamos con la prevención, la solución y análisis de cualquier riesgo.'
        ]}
        id='cyber'
      />
      <TextContainer 
        title='Servicio en la nube'
        variant='blue'
        baseText='Contamos con servicios en la nube, que incluyen almacenamiento, procesamiento y software, a través de Internet. Nuestros servicios en la nube ofrecen una serie de ventajas para las organizaciones y usuarios. Las principales:'
        additionalText={[
          '1.	Escalabilidad y flexibilidad: La nube permite a las organizaciones ampliar o reducir sus recursos informáticos según sus necesidades, sin la necesidad de invertir en hardware costoso. Esto facilita adaptarse rápidamente a los cambios empresariales y puede ayudar a reducir costos.',
          '2.	Ahorro de costos: Al utilizar servicios basados en la nube, las organizaciones evitan los costos iniciales asociados con la compra y el mantenimiento de servidores y software propios. Además, el modelo de pago por uso en la nube puede reducir los costos generales.',
          '3.	Accesibilidad y colaboración: La nube permite a los usuarios acceder a sus datos y aplicaciones desde cualquier lugar con conexión a Internet. Esto facilita la colaboración y el trabajo remoto.'
        ]}
        id='cloud'
      />
    </>
  )
};

export default Services;