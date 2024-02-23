import { useState } from "react";
import gear from '../assets/gear.png';

const TextContainer = ({title, baseText, additionalText, variant}) => {
  const [ show, setShow ] = useState(false);
  const variants = {
    sand: {bg: 'bg-sand', text: 'text-olive', title: 'text-olive'},
    blue: {bg: 'bg-blue', text: 'text-white font-thin', title: 'text-olive'}
  }
  return(
    <div className={`${variants[variant].bg} text-center p-7`}>
      <div className="text-center relative mb-5">
        <h1 className={`${variants[variant].title} uppercase text-2xl`}>{title}</h1>
        {variant === 'blue' && <img src={gear} className="size-10 absolute top-0 right-0"/>}
      </div>
      <p className={`${variants[variant].text}`}>{baseText}</p>
      {(!show && additionalText) && 
      <p 
        className={`${variants[variant].text} mt-3 underline`}
        onClick={() => setShow(true)}
      >Ver más</p>
      }
      {(show && additionalText) &&
      additionalText.map((item) => (<p className={`${variants[variant].text} mt-3 font-thin`}>{item}</p>))
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