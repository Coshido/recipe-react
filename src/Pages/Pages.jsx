import React from "react";
import Home from "./Home";
import Cusine from "./Cuisine";
import Searched from "./Searched";
import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cusine />} />
        <Route path="/searched/:search" element={<Searched />} />
      </Routes>
    </div>
  );
}

export default Pages;
