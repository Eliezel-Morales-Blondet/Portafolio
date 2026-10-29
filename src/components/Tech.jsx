import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"
import { DiGit } from "react-icons/di"
import { SiDotnet } from "react-icons/si"
import image from "../assets/sqllogo.png"

const Tech = () => {
  return (
    <div id="tech" className="flex min-h-[70vh] flex-col items-center justify-center gap-16 md:gap-32">
      <h1 className="text-4xl font-light text-white">Tecnologias</h1>
      <div className="flex flex-wrap items-center gap-10 p-5">
        <div className="">
          <BiLogoTypescript className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
        <div className="">
          <BiLogoJavascript className="cursor-pointer text-[80px] text-amber-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
        <div className="">
          <SiDotnet className="cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
        <div className="">
          <DiGit className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </div>
        <div>
          <img src={image} alt="SQL Server" className="cursor-pointer h-[80px] w-[80px] object-contain transition-all duration-300 hover:-translate-y-5 sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px]" />
        </div>
      </div>
    </div>
  )
}

export default Tech