import image1 from '../assets/imagenes_proyectos/digiapi1.png'
import image2 from '../assets/imagenes_proyectos/calculadora.png'
import image3 from '../assets/imagenes_proyectos/tictactoe.png'
import { motion } from "motion/react";

const projectsData = [
  {
    image: image1,
    title: "Digimon Web",
    descripcion:"Web creada con Javascript vanilla para consumir la api de digimon. En esta web se puede encontrar toda la información relacionada con los personajes, caracteristicas de los digimon. Cuenta con un buscador de digimon por nombre, tipo y nivel. Esta web esta diseñada con diseño responsive para ser compatible con diferentes dispositivos y pantallas, adaptadose perfectamente para una mejor experiecia de usuario.",
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS"],
    link: "https://digimon-api-rest.vercel.app/"
  },
  {
    image: image2,
    title: "Calculadora",
    descripcion:"Aplicación web de calculadora utilizando Vite, React y TypeScript, diseñada con una interfaz moderna, intuitiva y responsiva. El proyecto permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división, mediante una distribución organizada de botones y una pantalla de visualización. La aplicación aprovecha la velocidad de desarrollo de Vite, la arquitectura basada en componentes de React y el tipado estático de TypeScript para ofrecer un código estructurado, mantenible y eficiente.",
    technologies: ["TypeScript", "React", "Vite", "CSS", "HTML"],
    link: "https://calculator-app-nu-sable.vercel.app/"
  },
  {
    image: image3,
    title: "Tic Tac Toe",
    descripcion:"Aplicación web del clásico juego Tic Tac Toe (Tres en Raya) utilizando React JS y Vite. Cuenta con una interfaz moderna, intuitiva y responsiva que permite a dos jugadores enfrentarse por turnos en un tablero de 3x3, con el objetivo de conseguir tres símbolos iguales en línea horizontal, vertical o diagonal. La aplicación incorpora lógica para controlar los turnos de los jugadores, detectar combinaciones ganadoras, identificar empates y permitir reiniciar la partida.",
    technologies: ["JavaScript", "React", "Vite", "CSS", "HTML"],
    link: "https://tic-tac-toe-alpha-ruddy-47.vercel.app/"
  }
]

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
          <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"/>
        
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.descripcion}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))
            }
            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={project.title} className="rounded-lg bg-black p-3">Ver Proyecto</a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  ) 
}

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
const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl ">Mis Proyectos</h1>
      </ScrollReveal>
      
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project}/>
          ))
        }
      </div>
    </div>
  )
}

export default Projects