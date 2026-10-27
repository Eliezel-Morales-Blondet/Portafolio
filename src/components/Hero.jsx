import image from "../assets/FotoCV.png"

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <div>
          <img src={image} className="w-[300px] cursor-pointer rounded-full shadows-indigo-900 transition-all duration-300  hover:scale-105 hover:shadow-2xl hover:shadow-gray-600 md:w-[350px]" alt="" />
        </div>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent text-5xl font-light md:text-7xl">Eliezel Jr. Morales Blondet</h1>
          <h3></h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
