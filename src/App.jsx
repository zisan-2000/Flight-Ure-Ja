import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BrandAssetsPage from "./pages/BrandAssetsPage";
import BusinessDetails from "./pages/BusinessDetails";
import ContactsPage from "./pages/ContactsPage";
import FinishPage from "./pages/FinishPage";
import GrantAccessPage from "./pages/GrantAccessPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="contacts" element={<ContactsPage />} />
        {/* <Route path="/contacts" component={ContactsPage} /> */}
        <Route path="/business-details" element={<BusinessDetails />} />
        <Route path="/brand-assets" element={<BrandAssetsPage />} />
        <Route path="/grant-access" element={<GrantAccessPage />} />
        <Route path="/finish" element={<FinishPage />} />
        <Route path="/" exact element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState } from "react";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Flights from "./pages/Flights";
// import Home from "./pages/Home";
// import Hotels from "./pages/Hotels";
// import Reviews from "./pages/Reviews";

// function App() {
//   const [language, setLanguage] = useState("en");

//   const toggleLanguage = () => {
//     setLanguage((prevLang) => (prevLang === "en" ? "bn" : "en"));
//   };

//   return (
//     <Router>
//       <Navbar toggleLanguage={toggleLanguage} />
//       <Routes>
//         <Route path="/" element={<Home language={language} />} />
//         <Route path="/about" element={<About language={language} />} />
//         <Route path="/contact" element={<Contact language={language} />} />
//         <Route path="/flights" element={<Flights language={language} />} />
//         <Route path="/hotels" element={<Hotels language={language} />} />
//         <Route path="/reviews" element={<Reviews language={language} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
