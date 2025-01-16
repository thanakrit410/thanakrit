// src/App.tsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./router/AppRoutes.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AppRoutes />
        </div>
          <Footer />
      </div>
    </Router>
  );
};

export default App;
