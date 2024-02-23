import { useRef } from "react";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
      .then(
        () => {
          console.log('SUCCESS')
        }, 
        (e) => {
          console.log('Error', e.text)
        }
      )
  };
  return (
    <div className="bg-blue pb-8" >
      <h1 className="text-center uppercase text-olive text-2xl mb-9">Contacto</h1>
      <div className="flex justify-center">
        <form 
          className="bg-ligthBlue w-[220px] flex flex-col justify-evenly gap-4 p-6 rounded-xl" 
          ref={form}
          onSubmit={sendEmail}
          >
          <input name="client_name" placeholder="Nombre" className="py-1 px-2  rounded-lg" type="text" required/>
          <input name="client_mail" placeholder="Email" className="py-1 px-2 rounded-lg" type="email" required/>
          <input name="client_number" placeholder="Teléfono" className="py-1 px-2 rounded-lg" type="phone" required/>
          <input name="message" placeholder="Mensaje" className="py-1 px-2 rounded-lg" type="text" required/>
          <button type='submit' className='bg-blue p-2 text-white text-center rounded-xl'>Enviar</button>
        </form>
      </div>
    </div>
  )
};

export default Contact;