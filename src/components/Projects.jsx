import image1 from '../assets/imagenes_proyectos/digiapi1.png'
import image2 from '../assets/imagenes_proyectos/calculadora.png'
import image3 from '../assets/imagenes_proyectos/tictactoe.png'
import { motion } from "motion/react";

const projectsData = [
  {
    image: image1,
    title: "Digimon Web",
    descripcion:"Web creada con Javascript vanilla para consumir la api de digimon. En esta web se puede encontrar toda la información relacionada con los personajes, caracteristicas de los digimon. Cuenta con un buscador de digimon por nombre, tipo y nivel. Esta web esta diseñada con diseño responsive para ser compatible con diferentes dispositivos y pantallas, adaptadose perfectamente para una mejor experiecia de usuario.",
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS"]
  },
  {
    image: image2,
    title: "Calculadora",
    descripcion:"Aplicación web de calculadora utilizando Vite, React y TypeScript, diseñada con una interfaz moderna, intuitiva y responsiva. El proyecto permite realizar operaciones matemáticas básicas, como suma, resta, multiplicación y división, mediante una distribución organizada de botones y una pantalla de visualización. La aplicación aprovecha la velocidad de desarrollo de Vite, la arquitectura basada en componentes de React y el tipado estático de TypeScript para ofrecer un código estructurado, mantenible y eficiente.",
    technologies: ["TypeScript", "React", "Vite", "CSS", "HTML"]
  },
  {
    image: image3,
    title: "Tic Tac Toe",
    descripcion:"Aplicación web del clásico juego Tic Tac Toe (Tres en Raya) utilizando React JS y Vite. Cuenta con una interfaz moderna, intuitiva y responsiva que permite a dos jugadores enfrentarse por turnos en un tablero de 3x3, con el objetivo de conseguir tres símbolos iguales en línea horizontal, vertical o diagonal. La aplicación incorpora lógica para controlar los turnos de los jugadores, detectar combinaciones ganadoras, identificar empates y permitir reiniciar la partida.",
    technologies: ["JavaScript", "React", "Vite", "CSS", "HTML"]
  }
]
const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center"></div>
  )
}

export default Projects