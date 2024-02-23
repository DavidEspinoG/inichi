const Contact = () => {

  return (
    <div className="bg-blue pb-8">
      <h1 className="text-center uppercase text-olive text-2xl mb-9">Contacto</h1>
      <div className="flex justify-center">
        <form className="bg-ligthBlue w-[220px] flex flex-col justify-evenly gap-4 p-6 rounded-xl">
          <input placeholder="Nombre" className="py-1 px-2  rounded-lg" type="text" required/>
          <input placeholder="Email" className="py-1 px-2 rounded-lg" type="email" required/>
          <input placeholder="Teléfono" className="py-1 px-2 rounded-lg" type="phone" required/>
          <input placeholder="Mensaje" className="py-1 px-2 rounded-lg" type="text" required/>
          <button type='submit' className='bg-blue p-2 text-white text-center rounded-xl'>Enviar</button>
        </form>
      </div>
    </div>
  )
};

export default Contact;