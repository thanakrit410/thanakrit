// src/pages/Home.tsx
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600">
        Welcome to the Home Page
      </h1>
      <p className="mt-4 text-lg text-center">
        This is a simple Home page built with React and TypeScript. 
        You can add more sections and content as needed.
      </p>

      <div className="mt-8 text-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
