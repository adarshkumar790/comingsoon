"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useState, useEffect } from "react";

const Home = () => {
  const iconSources = [
    "/music1.png",
    "/music2.png",
    "/music3.png",
    "/music4.png",
    "/music5.png",
  ];

  const characterImages = [
    "/ri1.JPG",
    "/ri2.JPG",
    "/ri3.JPG",
    // "/kumar.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % characterImages.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [characterImages.length]);

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
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" 
          />
        </div>
      );
    });
  };

  return (
    <>
      <Navbar />
      <div className="relative w-screen h-screen bg-gradient-to-b from-purple-900 via-purple-600 to-purple-400 flex items-center justify-center overflow-hidden">
        {/* Center Content */}
        <div className="flex flex-col items-center md:items-start">
          {/* Rotating Icon and Center Text */}
          <div className="relative w-[200px] h-[200px] mb-24 md:mb-0 md:mr-40 sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full border-4 border-dotted border-blue-400 flex items-center justify-center">
            {/* Current Effect */}
            <div className="absolute w-full h-full current-effect animate-flowing-current"></div>

            {/* Center Text */}
            <div className="text-center text-white">
              <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">THE</h1>
              <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">
                ART OF MUSIC
              </h1>
              <h1 className="text-lg sm:text-2xl md:text-4xl font-bold">WITH</h1>
              <div className="flex justify-center -mt-2 sm:-mt-4">
                <Image
                  src="/logomusics.png"
                  alt="logomusic"
                  width={60}
                  height={60}
                  className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" 
                />
              </div>
            </div>

            {/* Rotating Icons */}
            <div className="absolute w-full h-full animate-icon-spin">
              {generateIcons(iconSources)}
            </div>
          </div>

          {/* Mobile View Character */}
          {/* <div className="mt-6 sm:mt-8 md:hidden">
            <div className="relative w-[200px] h-[250px] sm:w-[300px] sm:h-[350px]">
              <img
                src={characterImages[currentImage]} 
                alt="Character"
                className="w-full h-full object-contain rounded-lg bg-white" 
              />
            </div>
          </div> */}
        </div>

        {/* Background Image */}
        <div className="absolute right-0 top-4 w-[60%] h-full md:w-[50%] z-[-1]">
          <Image
            src="/bgmusic.png"
            alt="Right Background"
            layout="fill"
            objectFit="cover"
            quality={75}
            className="opacity-50"
          />
        </div>

        {/* Desktop View Character */}
        {/* <div className="absolute right-4 mt-24 mb-16 hidden md:block">
  <div className="relative w-[400px] h-[600px] flex items-center justify-center rounded-2xl overflow-hidden">
    <img
      src={characterImages[currentImage]} 
      alt="Character"
      className="w-full h-full object-contain transition-transform duration-300 ease-in-out" 
    />
  </div>
</div> */}



      </div>
    </>
  );
};

export default Home;
