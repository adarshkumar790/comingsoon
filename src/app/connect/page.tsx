"use client"
import React from "react";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white">    
      <div className="text-center py-8">
        <h3 className="text-3xl font-bold">Contact Us</h3>
        <h6 className="text-2xl text-red-600 font-bold">Music World Melody</h6>
        <h2 className="text-lg text-gray-200 leading-relaxed -mt-6">
           <br />
          901, Silver Samnway, Munjmauda, Akota, Vadodara 390020
        </h2>
      </div>

    
      <div className="flex items-center justify-center mr-4 ml-4">
        <div className="w-full max-w-5xl grid grid-cols-12 gap-4">
      
        <div className="col-span-12 lg:col-span-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3691.779895842414!2d73.1664621!3d22.286326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc900681ee2cf%3A0xaf545eb66351a1ec!2sLedgerline%20Technology!5e0!3m2!1sen!2sin!4v1737781644254!5m2!1sen!2sin"
          
          width="100%"
          height="500"
          style={{ border: 0, borderRadius: '10px' }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
          <div className="col-span-12 lg:col-span-4">
            <Form />
          </div>

    
          <div className="col-span-12 lg:col-span-2 text-m text-gray-400 space-y-10 lg:mt-0 mt-8 flex flex-col lg:items-start items-center">
            {/* <p className="text-center lg:text-left">
              <strong>Business Enquiry:</strong> <br />
              Contact@musicalmelodyworld.com
            </p> */}
            <p className="text-center lg:text-left">
              <strong>Work with us:</strong> <br />
              Contact@musicalmelodyworld.com
            </p>
            {/* <p className="text-center lg:text-left">
              <strong>Press Enquiry:</strong> <br />
              press@redchillies.com
            </p> */}
            {/* <p className="text-center lg:text-left">
              <strong>Creative Enquiry:</strong> <br />
              creative@redchillies.com
            </p> */}
            <p className="text-center lg:text-left">
              <strong>Marketing:</strong> <br />
              contact@ledgerlinetech.com
            </p>
            <p className="text-center lg:text-left">
              <strong>Mob No:-</strong> <br />
              +91 2657964445
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
