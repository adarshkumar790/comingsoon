"use client"
import React from "react";
import Form from "@/components/Form";
import Navbar from "@/components/Navbar";

const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white">
      {/* Header Section */}
      <div className="text-center py-12">
        <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
        <p className="text-lg leading-relaxed">
          Red Chillies Entertainments Pvt. Ltd. <br />
          Backstage, Plot no. 612, <br />
          Junction of Rama Krishna Mission Road & 15th Road, <br />
          Santacruz (West), Mumbai 400054
        </p>
      </div>

      {/* Content Section */}
      <div className="flex items-center justify-center mr-4 ml-4">
        <div className="w-full max-w-5xl grid grid-cols-12 gap-4">
          {/* Google Map Section */}
          <div className="col-span-12 lg:col-span-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.00352324924!2d73.00826950851496!3d22.322336996839436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1736004921789!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Form Section */}
          <div className="col-span-12 lg:col-span-4">
            <Form />
          </div>

          {/* Enquiry Section */}
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
