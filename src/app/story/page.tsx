"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";

const Story = () => {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-12 mt-4">
        
        <div className="flex justify-center items-center py-8">
          <h3 className="text-3xl font-bold text-blue-200 underline underline-offset-8 decoration-gray-600">
            Our Story
          </h3>
        </div>

        <div className="container mx-auto px-4 md:px-4 lg:px-4">
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            
            <div className="flex justify-center lg:col-span-1">
              <Image
                src="/dipak3.jpeg" 
                alt="Gauri Khan"
                width={400}
                height={600} 
                className="rounded-lg shadow-lg object-cover md:h-[500px] md:w-[500px] w-[350px] h-[400px]" // Responsive size for images
              />
            </div>

            
            <div className="lg:col-span-1 text-left  md:px-4 px-2">
            Founded in 2024 by Dipak Baldevbhai Patel and Ms. Prahavi Pathak, Musical Melody World stands as a beacon of creativity in the entertainment industry. Built on a foundation of passion and artistry, we are a multifaceted production house dedicated to redefining the boundaries of storytelling through music, films, and digital content.

At Musical Melody World, every project is a symphony of innovation and emotion. From producing heartfelt songs to crafting engaging web series and cinematic masterpieces, we thrive on creating content that deeply connects with audiences, evoking emotions that resonate long after the experience ends.

As a full-fledged film studio, we bring stories to life with a seamless blend of technology, creativity, and excellence. Whether it’s a soul-stirring melody, a compelling script, or visually stunning cinematography, our team is driven by a mission to elevate entertainment to unparalleled heights.

Musical Melody World is more than just a production house—it’s a creative movement that celebrates art, empowers talent, and inspires dreams.

Let us take you on a journey where every beat, frame, and story redefines the essence of entertainment.


            </div>

          
            <div className="flex justify-center lg:col-span-1">
              <Image
                src="/dipak1.JPG" 
                alt="Shah Rukh Khan"
                width={500}
                height={700} 
                className="rounded-lg shadow-lg object-cover md:h-[500px] md:w-[500px] w-[350px] h-[400px]" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
