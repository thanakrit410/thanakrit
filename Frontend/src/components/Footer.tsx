// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white text-center p-4 mt-8">
      <div className="container mx-auto">
        <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="/privacy-policy" className="text-white hover:underline mx-2">Privacy Policy</a>
          <a href="/terms-of-service" className="text-white hover:underline mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
