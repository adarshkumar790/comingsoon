"use client"
import { useState, useEffect, FormEvent } from "react";
import axios from "axios";

interface Movie {
  _id: string;
  title: string;
  image: string;
  link: string;
  createdBy: string;
}

const AdminForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [link, setLink] = useState<string>("");
  const [createdBy, setCreatedBy] = useState<string>("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [editingMovieId, setEditingMovieId] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  
  const fetchMovies = async () => {
    try {
      const response = await axios.get<Movie[]>("https://musicbackend-u27q.onrender.com/movies");
      setMovies(response.data);
    } catch (error: unknown) {
      alert("Error fetching movies: " + (error as Error).message);
    }
  };

  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (editingMovieId) {
        
        await axios.put(`https://musicbackend-u27q.onrender.com/movies/${editingMovieId}`, {
          title,
          image,
          link,
          createdBy,
        });
        alert("Movie updated successfully!");
      } else {
    
        await axios.post("https://musicbackend-u27q.onrender.com/movies", {
          title,
          image,
          link,
          createdBy,
        });
        alert("Movie added successfully!");
      }
      resetForm();
      fetchMovies();
    } catch (error: unknown) {
      alert("Error saving movie: " + (error as Error).message);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`https://musicbackend-u27q.onrender.com/movies/${id}`);
      alert("Movie deleted successfully!");
      fetchMovies();
    } catch (error: unknown) {
      alert("Error deleting movie: " + (error as Error).message);
    }
  };

  
  const handleEdit = (movie: Movie) => {
    setEditingMovieId(movie._id);
    setTitle(movie.title);
    setImage(movie.image);
    setLink(movie.link);
    setCreatedBy(movie.createdBy);
  };

  
  const resetForm = () => {
    setTitle("");
    setImage("");
    setLink("");
    setCreatedBy("");
    setEditingMovieId(null);
  };

  return (
    <div className="container mx-auto p-6">

      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">
          {editingMovieId ? "Edit Movie" : "Add New Movie"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Music Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Created By"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-1/2 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              {editingMovieId ? "Update Movie" : "Add Movie"}
            </button>
            {editingMovieId && (
              <button
                type="button"
                onClick={resetForm}
                className="w-full sm:w-1/2 bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition"
              >
                Cancel Edit
              </button>
            )}
          </div>
        </form>
      </div>

      
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Movies List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 hover:shadow-2xl transition duration-300"
            >
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
              <p className="text-sm text-gray-400">Created By: {movie.createdBy}</p>
              <a
                href={movie.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 underline"
              >
                Listen
              </a>
              <div className="flex justify-between space-x-4">
                <button
                  onClick={() => handleEdit(movie)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(movie._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
