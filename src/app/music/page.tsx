"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

interface Movie {
  id: number;
  title: string;
  image: string;
}

const movies: Movie[] = [
  { id: 1, title: "Bhakshak", image: "/movie1.jpg" },
  { id: 2, title: "Dunki", image: "/movie2.jpg" },
  { id: 3, title: "Jawan", image: "/movie3.jpg" },
  { id: 4, title: "Darlings", image: "/movie4.jpg" },
  { id: 5, title: "al", image: "/movie5.jpg" },
  { id: 6, title: "kl", image: "/movie7.jpg" },
];

const MovieGallery = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Filter movies based on search term
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filtered titles for suggestions
  const titleSuggestions = movies
    .map((movie) => movie.title)
    .filter((title) =>
      title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsDropdownVisible(value.trim() !== "");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion);
    setIsDropdownVisible(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>

      <div className="bg-black text-white min-h-screen flex flex-col items-center pt-20">
        {/* Add padding-top to account for Navbar height */}
        <div className="w-3/4">
          {/* Search Bar */}
          <div className="relative flex justify-end p-4">
            <input
              type="text"
              placeholder="Search Movies"
              value={searchTerm}
              onChange={handleInputChange}
              className="bg-transparent border border-red-400 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            {/* Dropdown Suggestions */}
            {isDropdownVisible && titleSuggestions.length > 0 && (
              <div className="absolute top-full right-0 bg-black border border-red-400 text-white rounded mt-1 max-h-40 overflow-y-auto shadow-lg z-20">
                {titleSuggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="p-2 hover:bg-red-500 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Movies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-20">
            {filteredMovies.map((movie) => (
              <div key={movie.id} className="relative group">
                {/* Movie Image */}
                <Image
                  src={movie.image}
                  alt={movie.title}
                  width={400}
                  height={300}
                  className="rounded-lg shadow-lg object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Movie Title */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-center font-semibold transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  {movie.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieGallery;
