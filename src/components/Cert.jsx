import image1 from "../assets/certificaciones/ITSC.png"
import image2 from "../assets/certificaciones/JavaScript.jpg"
import image3 from "../assets/certificaciones/Agiles.jpeg"
import image4 from "../assets/certificaciones/CSharp.jpg"
import image5 from "../assets/certificaciones/Programador.jpg"
import image6 from "../assets/certificaciones/Git.jpg"
import image7 from "../assets/certificaciones/Visual_Studio_Code.jpg"
import image8 from "../assets/certificaciones/Front-end.jpg"
import image9 from "../assets/certificaciones/Back-end.jpg"
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const Certifications = [
  {
    image: image1,
    name: "Técnico Superior en Desarrollo de Software",
    institution: "Instituto Técnico Superior Comunitario (ITSC)"
  },
  {
    image: image2,
    name: "Desarrollo de Software en JavaScript",
    institution: "Instituto Tecnológico de las Américas (ITLA)"
  },
  {
    image: image3,
    name: "Metodologías Ágiles",
    institution: "Instituto Nacional de Formación Técnico Profesional (INFOTEP)"
  },
  {
    image: image4,
    name: "Foundational C# with Microsoft",
    institution: "FreeCodeCamp"
  },
  {
    image: image5,
    name: "Programador (orientado a objetos)",
    institution: "Fundación Carlos Slim"
  },
  {
    image: image6,
    name: "Curso profesional de Git",
    institution: "codigofacilito"
  },
  {
    image: image7,
    name: "Curso de Visual Studio Code y GitHub Copilot",
    institution: "codigofacilito"
  },
  {
    image: image8,
    name: "Desarrollador Front-end",
    institution: "codigofacilito"
  },
  {
    image: image9,
    name: "Desarrollador Back-end",
    institution: "codigofacilito"
  }
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    transition={{durastion:0.8}}
    >
      {children}
    </motion.div>
  )
}

export const Cert = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCertificate]);

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  };
  return (
    
    <div id="certificates" className='flex min-h-[70vh] flex-col items-center justify-center gap-16 md:gap-32'>
      <ScrollReveal>
        <motion.h1 
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5}}
        className="text-4xl font-light text-white md:text-6xl ">Mis Certificados</motion.h1>
      </ScrollReveal>
      <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          Certifications.map((cert, index) => {
            return (
              <div key={index} className="flex flex-col items-center gap-4 p-4 border rounded-xl shadow-sm hover:shadow-md transition">
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(cert)}
                  className="cursor-zoom-in border-0 bg-transparent p-0"
                  aria-label={`Ampliar certificado: ${cert.name}`}
                >
                  <img src={cert.image} alt={cert.name} className="w-64 h-64 object-contain hover:scale-120"/>
                </button>
                <p className="text-gray-500">{cert.name}</p>
                <p className="text-gray-500">{cert.institution}</p>
              </div>
            );
          })
        }
      </motion.div>
      {selectedCertificate && (
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{duration:0.5}}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCertificate(null)}
          role="presentation"
        >
          <div
            className="relative flex max-h-[95vh] max-w-[95vw] flex-col items-center gap-3 rounded-lg bg-gray-950 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.name}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertificate(null)}
              className="absolute right-2 top-2 rounded bg-black/70 px-3 py-1 text-2xl text-white hover:bg-black"
              aria-label="Cerrar imagen"
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.name}
              className="max-h-[80vh] max-w-[90vw] object-contain"
            />
            <p className="text-center text-white">{selectedCertificate.name}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}
