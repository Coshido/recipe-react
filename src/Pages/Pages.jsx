import React from "react";
import Home from "./Home";
import Cusine from "./Cuisine";
import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cusine />} />
      </Routes>
    </div>
  );
}

export default Pages;
