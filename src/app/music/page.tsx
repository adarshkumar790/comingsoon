"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { HiPlay } from "react-icons/hi"; // Import Play icon from Heroicons

interface Movie {
  _id: string;
  title: string;
  image: string;
  link: string;
  createdBy: string;
  createdAt: string; // Assuming the backend provides this field
}

const MovieGallery = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  useEffect(() => {
    fetchMovies();
  }, []);

  // Fetch movies from the backend
  const fetchMovies = async () => {
    try {
      const response = await axios.get<Movie[]>("https://musicbackend-u27q.onrender.com/movies");
      setMovies(response.data);
    } catch (error: unknown) {
      alert("Error fetching movies: " + (error as Error).message);
    }
  };

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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            {filteredMovies.map((movie) => (
              <div
                key={movie._id}
                className="relative group border border-pink-500 p-1 flex flex-col space-y-4"
                style={{ minHeight: "400px" }} // Added min-height for better layout control
              >
                {/* Movie Image with link */}
                <a href={movie.link} target="_blank" rel="noopener noreferrer">
                  <div className="w-full h-96 relative">
                    <Image
                      src={movie.image}
                      alt={movie.title}
                      layout="fill" // This ensures the image covers the full div
                      objectFit="cover" // Ensures the image covers the container without distortion
                      className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Play Icon */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <HiPlay size={50} className="cursor-pointer" />
                    </div>
                  </div>
                </a>

                {/* Movie Info Box */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 flex justify-between items-center w-full opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                  {/* Left: Created By */}
                  <div className="text-sm text-gray-300">
                    <strong></strong> {movie.createdBy}
                  </div>

                  {/* Center: Title */}
                  <div className="font-semibold text-sm text-center">
                    {movie.title}
                  </div>

                  {/* Right: Created Date */}
                  <div className="text-sm text-gray-500">
                    <strong></strong> {new Date(movie.createdAt).toLocaleDateString()}
                  </div>
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
