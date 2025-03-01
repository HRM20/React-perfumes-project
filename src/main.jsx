import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Navbar.jsx";
import About from "./About.jsx";
import Perfumes from "./Perfumes.jsx";
import Perfume from "./Perfume.jsx";
import NotFound from "./NotFound.jsx";
import Contents from "./Contents.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
            <Route path="/Contents" element={<Contents />} />
            <Route path="/about" element={<About />} />
            <Route path="/perfumes" element={<Perfumes />}>
              <Route path=":perfumeId" element={<Perfume />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
