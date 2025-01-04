// pages/index.tsx

import Image from "next/image";

const Home = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center overflow-hidden">

      <div className="relative rounded-full border-dotted border-yellow-400 w-[400px] h-[400px] flex items-center justify-center">
        
        <div className="absolute w-full h-full current-effect animate-flowing-current"></div>

    
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">THE</h1>
          <h2 className="text-5xl font-bold">ART OF</h2>
          <h3 className="text-4xl font-bold">COMPETING</h3>
        </div>

        
        <div className="absolute w-full h-full">
          
          <div className="absolute w-full h-full animate-logo-spin">
            <img
              src="/bgmusic.png"
              alt="Logo 1"
              className="absolute w-20 h-20 -top-8 left-1/2 transform -translate-x-1/2"
            />
          </div>
        </div>
      </div>

      
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
      <div className="absolute right-10 bottom-10">
        <img
          src="/musicman1.png"
          alt="Character"
          className="w-[350px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Home;
