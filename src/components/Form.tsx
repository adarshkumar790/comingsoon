import React from "react";

const Form = () => {
  return (
    <div className="bg-black text-white p-6 md:-mt-8 -mt-0  rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 uppercase tracking-wider">Connect</h2>
      <form>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-transparent border border-red-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-transparent border border-red-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 bg-transparent border border-red-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="State"
            className="w-full p-3 bg-transparent border border-red-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <textarea
            placeholder="Marketing Comments"
            className="w-full p-3 bg-transparent border border-red-500 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-md font-bold tracking-wide hover:bg-red-600 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
