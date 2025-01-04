import Image from "next/image";

const Home = () => {
  // Generate icons evenly spaced along the circle
  const generateIcons = (count: number) => {
    const icons = [];
    for (let i = 0; i < count; i++) {
      const angle = (i * (360 / count)); // Angle in degrees
      icons.push(
        <div
          key={i}
          className="absolute"
          style={{
            transform: `rotate(${angle}deg) translate(0, -180px)`, // Position along the circle
          }}
        >
          <img
            src="/musicold.png"
            alt={`Music Icon ${i + 1}`}
            className="w-10 h-10"
          />
        </div>
      );
    }
    return icons;
  };

  return (
    <div className="relative w-screen h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center overflow-hidden">
      {/* Circle border */}
      <div className="relative w-[400px] h-[400px] rounded-full border-4 border-dotted border-yellow-400 flex items-center justify-center">
        {/* Flowing current effect */}
        <div className="absolute w-full h-full current-effect animate-flowing-current"></div>

        {/* Text inside the circle */}
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">THE ART</h1>
          <h2 className="text-5xl font-bold">OF MUSIC</h2>
          <h3 className="text-4xl font-bold">WITH MMW</h3>
        </div>

        {/* Rotating icons along the circle */}
        <div className="absolute w-full h-full animate-icon-spin">
          {generateIcons(8)} {/* Generate 8 icons */}
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
          src="/musicman1.png"
          alt="Character"
          className="w-[350px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Home;
