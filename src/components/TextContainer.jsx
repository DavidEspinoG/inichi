import { useState } from "react";
import gear from '../assets/gear.png';

const TextContainer = ({title, baseText, additionalText, variant, id}) => {
  const [ show, setShow ] = useState(false);
  const variants = {
    sand: {bg: 'bg-sand', text: 'text-olive', title: 'text-olive'},
    blue: {bg: 'bg-blue', text: 'text-white font-thin', title: 'text-olive'}
  }
  return(
    <div className={`${variants[variant].bg} text-center p-7`} id={id ? id : null}>
      {variant === 'blue' ?
        <div className="text-center flex justify-between items-center mb-7">
          <div className="text-center basis-11/12">
            <h1 className={`${variants[variant].title} uppercase text-2xl`}>{title}</h1>
          </div>
          <img src={gear} className="size-10"/>
        </div> : 
        <div className="text-center mb-7">
            <h1 className={`${variants[variant].title} uppercase text-2xl`}>{title}</h1>
        </div>  
      }
      
      <p className={`${variants[variant].text}`}>{baseText}</p>
      {(!show && additionalText) && 
      <p 
        className={`${variants[variant].text} mt-3 underline`}
        onClick={() => setShow(true)}
      >Ver más</p>
      }
      {(show && additionalText) &&
      additionalText.map((item) => (<p key={item} className={`${variants[variant].text} mt-3 font-thin`}>{item}</p>))
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