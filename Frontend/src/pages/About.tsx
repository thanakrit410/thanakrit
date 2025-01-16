// src/pages/About.tsx
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center text-green-600">
        About Us
      </h1>
      <p className="mt-4 text-lg text-center">
        We are a team of passionate developers dedicated to building
        high-quality web and mobile applications. Our goal is to deliver
        seamless user experiences through innovative design and cutting-edge
        technology.
      </p>

      <div className="mt-8 text-center">
        <p className="text-md text-gray-700">
          Our team works on various projects involving web development,
          mobile applications, and cloud solutions.
        </p>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default About;
