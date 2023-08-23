import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// --------------------------- { Components} --------------------------------------
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbarr from "./Components/Navbarr";
import Footerr from "./Components/Footerr";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbarr />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Resume" element={<Resume />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footerr />
      </BrowserRouter>
    </>
  );
};

export default App;
