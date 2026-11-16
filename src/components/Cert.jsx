import image1 from "../assets/certificaciones/ITSC.png"
import image2 from "../assets/certificaciones/JavaScript.jpg"
import image3 from "../assets/certificaciones/Agiles.jpeg"
import image4 from "../assets/certificaciones/CSharp.jpg"
import image5 from "../assets/certificaciones/Programador.jpg"
import image6 from "../assets/certificaciones/Git.jpg"
import image7 from "../assets/certificaciones/Visual_Studio_Code.jpg"
import image8 from "../assets/certificaciones/Front-end.jpg"
import image9 from "../assets/certificaciones/Back-end.jpg"

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

export const Cert = () => {
  return (
    <div className='flex-wrap items-center justify-center gap-10 p-5'>
      <img src="" alt="" />
    </div>
  )
}
