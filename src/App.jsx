import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flights from "./pages/Flights";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Reviews from "./pages/Reviews";

function App() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "bn" : "en"));
  };

  return (
    <Router>
      <Navbar toggleLanguage={toggleLanguage} />
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="/flights" element={<Flights language={language} />} />
        <Route path="/hotels" element={<Hotels language={language} />} />
        <Route path="/reviews" element={<Reviews language={language} />} />
      </Routes>
    </Router>
  );
}

export default App;
