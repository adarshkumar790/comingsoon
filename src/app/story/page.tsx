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
                src="/twinkle.jpeg" 
                alt="Gauri Khan"
                width={400}
                height={600} 
                className="rounded-lg shadow-lg object-cover md:h-[500px] md:w-[300px] w-[250px] h-[400px]" // Responsive size for images
              />
            </div>

            
            <div className="lg:col-span-1 text-left md:px-4 px-2">
              <p className="text-lg leading-relaxed">
                Founded in 2002 by iconic Indian actor Shah Rukh Khan, and producer
                and interior designer Gauri Khan, Red Chillies Entertainment is a
                fully integrated studio that has produced some of the most
                definitive and prominent work in modern Indian cinema.
              </p>
              <br />
              <p className="text-lg leading-relaxed">
                Over the years, Red Chillies Entertainment has established itself
                as a leading film studio and a distribution company, as well as a
                premier visual effects studio.
              </p>
            </div>

          
            <div className="flex justify-center lg:col-span-1">
              <Image
                src="/akashay.jpeg" 
                alt="Shah Rukh Khan"
                width={450}
                height={700} 
                className="rounded-lg shadow-lg object-cover md:h-[500px] md:w-[300px] w-[250px] h-[400px]" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
