"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Home = () => {
  
  const iconSources = [
    "/music1.png", 
    "/music2.png", 
    "/music3.png", 
    "/music4.png", 
    "/music5.png", 
  ];

  const generateIcons = (icons: string[]) => {
    const count = icons.length;
    return icons.map((icon, i) => {
      const angle = (i * 360) / count; 
      return (
        <div
          key={i}
          className="absolute"
          style={{
            transform: `rotate(${angle}deg) translate(0, -100px)`, 
          }}
        >
          <img
            src={icon}
            alt={`Icon ${i + 1}`}
            className="w-12 h-12" 
          />
        </div>
      );
    });
  };

  return (
    <>
    <Navbar/>
  
    <div className="relative w-screen h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-purple-400 flex items-center justify-center overflow-hidden">
      {/* Circle border */}
      <div className="relative w-[400px] h-[400px] rounded-full border-4 border-dotted border-blue-400 flex items-center justify-center">
        {/* Flowing current effect */}
        <div className="absolute w-full h-full current-effect animate-flowing-current"></div>

        {/* Text inside the circle */}
        <div className="text-center text-white">
  {/* Logo centered above the text */}
        
        <h1 className="text-4xl font-bold">THE</h1>
        <h1 className="text-4xl font-bold"> ART OF MUSIC</h1>
        <h1 className="text-4xl font-bold">WITH</h1>
        <div className="flex justify-center -mt-4"> 
        <Image src="/logomusics.png" alt="logomusic" width={100} height={100} /> {/* Adjusted width and height */}
        </div>
        </div>


        
        <div className="absolute w-full h-full animate-icon-spin">
          {generateIcons(iconSources)}
        </div>
      </div>

      {/* Background image */}
      <div className="absolute right-0 top-0 w-[50%] h-full z-[-1]">
        <Image
          src="/bgmusic.png"
          alt="Right Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          className="opacity-50"
        />
      </div>

      {/* Character image */}
      <div className="absolute right-10 bottom-10">
        <img
          src="/lata.png"
          alt="Character"
          className="w-[350px] h-[400px]"
        />
      </div>
    </div>
    </>
  );
};

export default Home;
