import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";



import Home from "./pages/home";
import Artisansid from "./pages/artisansid";
import Artisans from "./pages/artisans";
import Erreur404 from "./pages/erreur404";
import NavBar from "./components/navbar/NavBar";


export default function App() {
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Artisans" element={<Artisans/>}/>
        <Route path="/Artisansid" element={<Artisansid/>}/>
        <Route path="*" element={<Erreur404/>}/>
      </Routes>
    </BrowserRouter>
  );
};