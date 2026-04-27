import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Home from "./pages/home";
import Artisansid from "./pages/artisansid";
import Artisans from "./pages/artisans";
import Erreur404 from "./pages/erreur404";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import "./styles/main.scss"


export default function App() {
  return(
    <div className="app">
      <BrowserRouter>
          <NavBar/>
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Artisans" element={<Artisans/>}/>
              <Route path="/Artisans/:id" element={<Artisansid/>}/>
              <Route path="*" element={<Erreur404/>}/>
            </Routes>
          </main>
          

      <Footer/>
      </BrowserRouter>
    </div>
      
    
  );
}