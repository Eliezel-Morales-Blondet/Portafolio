import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ixielqv", "template_usrfl2t", form.current, "SPkm3khAqIrZh0GDk").then(
      () => {
        alert("Mensaje envíado exitosamente.");
        form.current.reset();
        setPhone('')
      },
      (error) => {
        alert("Error al envíar el mensaje, disculpe las molestias.", error)
      }
    )
  }

  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (value) => {
    // 1. Eliminar todo lo que no sea un dígito
    const digits = value.replace(/\D/g, '');

    // 2. Limitar a un máximo de 10 dígitos
    const limited = digits.slice(0, 10);

    // 3. Aplicar guiones según la longitud
    if (limited.length < 4) return limited;
    if (limited.length < 7) {
      return `${limited.slice(0, 3)}-${limited.slice(3)}`;
    }
    return `${limited.slice(0, 3)}-${limited.slice(3, 6)}-${limited.slice(6, 10)}`;
  };

  const handleChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-blue-500 to-blue-500 to-blue-500 bg-clip-text text-transparent">Contáctame</span>
        </h1>
        <p className="text-center text-lg font-semibold text-gray-500">¿Deseas contactarme? Envía un mensaje a mi correo electrónico.</p>
        <form action="" ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
            <div>
              <input type="text" id="nombre" name="nombre" placeholder="Escriba su nombre" required className="rounded-lg border border-blue-600 bg-gray-300 pl-2 px-42 py-3 text-lg font-bold text-black shadow-blue-400 transition-all duration-300"/>
            </div>
            <div>
              <input type="text" id="correo" name="correo" placeholder="Escriba su correo" required className="text-nowrap rounded-lg border border-blue-600 bg-gray-300 pl-2 px-42 py-3 text-lg font-bold text-black shadow-blue-400 transition-all duration-300"/>
            </div>
            <div>
              <input type="text" id="asunto" name="asunto" placeholder="(Asunto)" className="text-nowrap rounded-lg border border-blue-600 bg-gray-300 pl-2 px-42 py-3 text-lg font-bold text-black shadow-blue-400 transition-all duration-300"/>
            </div>
            <div>
              <input type="tel" id="telefono" name="telefono" value={phone} onChange={handleChange} placeholder="000-000-0000" maxLength={12} pattern="\d{3}-\d{3}-\d{4}" title="Ingresa un número válido de 10 dígitos (ej. 809-555-0199)" required className="text-nowrap rounded-lg border border-blue-600 bg-gray-300 pl-2 px-42 py-3 text-lg font-bold text-black shadow-blue-400 transition-all duration-300"/>
            </div>
            <div>
              <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje" className="w-103 h-32 p-3 text-left border rounded-md resize-none text-nowrap rounded-lg border border-blue-600 bg-gray-300 pl-2 text-left text-lg font-bold text-black shadow-blue-400 transition-all duration-300"></textarea>
            </div>
            <div>
              <button className="text-nowrap rounded-lg border border-blue-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-blue-400 transition-all duration-300 hover:cursor-pointer">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact