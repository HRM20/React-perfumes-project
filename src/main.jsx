import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Perfumes from "./Perfumes.jsx";
import Perfume from "./Perfume.jsx";
import NotFound from "./NotFound.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to={"Home"} />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/perfumes" element={<Perfumes />}>
          <Route path=":perfumeId" element={<Perfume />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
