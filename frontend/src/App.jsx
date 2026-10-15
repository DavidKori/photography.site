import { useState } from "react";
import { BrowserRouter, replace, Route, Routes, Navigate } from "react-router";

import "./styles/styles.css";
import Header from "./components/header/Header.jsx";
import Home from "./pages/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Services from "./pages/services/Services.jsx";
import Studio from "./pages/studio/Studio.jsx";
import Work from "./pages/work/Work.jsx";
import Dashboard from "./pages/Admin/dashboard.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route index="/" element={<Navigate to="home" replace />} />
        <Route path="header" element={<Header />} />

        <Route path="home" element={<Home />} />
        <Route path="footer" element={<Footer />} />
        <Route path="contact" element={<Contact />} />
        <Route path="service" element={<Services />} />
        <Route path="studio" element={<Studio />} />
        <Route path="work" element={<Work />} />
        <Route path="contact#careers" element={<Contact />} />
        <Route path="contact#form" element={<Contact />} />
        <Route path="work#architecture" element={<Work />} />
        <Route path="work#editorial" element={<Work />} />
        <Route path="work#archive" element={<Work />} />
        <Route path="studio#team" element={<Studio />} />
        <Route path="service#rates" element={<Services />} />

        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
