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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.779765295851!2d73.16646207404982!3d22.286330943404025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc61abd55693f%3A0x4130e60366036542!2sOYO%20818011%20Flagship%20Hotel%20Samanvay!5e0!3m2!1sen!2sin!4v1737715236120!5m2!1sen!2sin"
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
            <p className="text-center lg:text-left">
              <strong>Business Enquiry:</strong> <br />
              business@redchillies.com
            </p>
            <p className="text-center lg:text-left">
              <strong>Work with us:</strong> <br />
              work@redchillies.com
            </p>
            <p className="text-center lg:text-left">
              <strong>Press Enquiry:</strong> <br />
              press@redchillies.com
            </p>
            <p className="text-center lg:text-left">
              <strong>Creative Enquiry:</strong> <br />
              creative@redchillies.com
            </p>
            <p className="text-center lg:text-left">
              <strong>Marketing:</strong> <br />
              marketing@redchillies.com
            </p>
            <p className="text-center lg:text-left">
              <strong>Anti Piracy:</strong> <br />
              copyright@redchillies.com
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
