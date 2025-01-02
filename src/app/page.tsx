"use client";
import React from "react";
import { FaTwitter, FaInstagram, FaTelegram } from "react-icons/fa";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="text-center px-4">
        <h1 className="text-white text-5xl md:text-9xl md:text-gray-300 font-extrabold mb-4">
          COMING SOON
        </h1>
        <p className="text-gray-400 text-lg md:text-2xl font-semibold mb-8">
          We are building something amazing. Stay connected for updates!
          We are building something amazing. Stay connected for updates!
          We are building something amazing. Stay connected for updates!
        </p>
        <div className="flex justify-center mt-4 space-x-6 mb-8">
          <a
            href="https://t.me/BlockLensOrg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-white transition duration-300 text-4xl  md:text-5xl"
            aria-label="Telegram"
          >
            <FaTelegram />
          </a>
          <a
            href="http://x.com/BlockLensOrg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 text-4xl md:text-5xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/BlockLensOrg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300 text-4xl md:text-5xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
