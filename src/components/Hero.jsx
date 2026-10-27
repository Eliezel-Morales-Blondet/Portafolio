import image from "../assets/FotoCV.png"
import { motion } from "motion/react"
const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        >
          <img src={image} className="w-[300px] cursor-pointer rounded-full shadows-indigo-900 transition-all duration-300  hover:scale-105 hover:shadow-2xl hover:shadow-blue-300 md:w-[350px]" alt="" />
        </motion.div>
        <motion.div 
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay: 0.2}}
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 class="bg-gradient-to-r from-gray-400 via-white-500 to-blue-900 bg-clip-text text-transparent text-5xl font-light md:text-7xl text-center">Eliezel Jr. Morales Blondet</h1>
          <h3 className="bg-gradient-to-r from-blue-400 via-white-500 to-gray-900 bg-clip-text text-transparent text-3xl md:text-3xl">Software Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">Soy un desarrollador de software enfocado en convertir ideas en soluciones digitales modernas y eficientes. Me apasiona el desarrollo web con tecnologías como React, TypeScript y JavaScript, creando aplicaciones intuitivas, escalables y centradas en el usuario. Siempre busco aprender nuevas tecnologías, optimizar procesos y enfrentar desafíos técnicos que me permitan crecer profesionalmente mientras construyo productos de calidad.</p>
          <p className="md:text-base text-pretty text-sm text-gray-400">Tecnologías principales:</p>
          <p className="md:text-base text-pretty text-sm text-gray-400">• React • TypeScript • JavaScript • HTML5 • CSS3 • C# • Python • Git • Responsive Design • UI/UX</p>

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
