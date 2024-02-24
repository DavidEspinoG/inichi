import { useState, useEffect } from "react";
import gear from '../assets/gear.png';

const TextContainer = ({title, baseText, additionalText, variant, id}) => {
  const [ show, setShow ] = useState(false);
  useEffect(() => {
    if(window.innerWidth >= 768){
      setShow(true);
    }
    const resizeHandler = () => {
      if(window.innerWidth >= 768){
        setShow(true);
      } else {
        setShow(false)
      }
    };
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler)
    };
  }, [])
  const variants = {
    sand: {bg: 'bg-sand', text: 'text-olive', title: 'text-olive'},
    blue: {bg: 'bg-blue', text: 'text-white font-thin', title: 'text-olive'}
  }
  return(
    <div className={`${variants[variant].bg} text-center p-7 sm:px-28 sm:py-14`} id={id ? id : null}>
      {variant === 'blue' ?
        <div className="text-center relative items-center mb-7">
          <div className="text-center">
            <h1 className={`${variants[variant].title} uppercase text-2xl`}>{title}</h1>
          </div>
          <img src={gear} className="size-10 absolute top-[-3px] right-[-4px]"/>
        </div> : 
        <div className="text-center mb-7">
            <h1 className={`${variants[variant].title} uppercase text-2xl`}>{title}</h1>
        </div>  
      }
      
      <p className={`${variants[variant].text} text-md sm:text-lg`}>{baseText}</p>
      {(!show && additionalText) && 
      <p 
        className={`${variants[variant].text} mt-3 underline text-md`}
        onClick={() => setShow(true)}
      >Ver más</p>
      }
      {(show && additionalText) &&
      additionalText.map((item) => (<p key={item} className={`${variants[variant].text} mt-3 font-thin sm:text-lg`}>{item}</p>))
      }
      {show && 
      <p 
        className={`${variants[variant].text} mt-3 underline`}
        onClick={() => setShow(false)}
      >Ver menos</p>
      }
    </div>
  )
};

export default TextContainer;