import React from "react";
import Home from "./Home";
import Cusine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { Route, Routes } from "react-router-dom";
function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/recipe-react/" element={<Home />} />
        <Route path="/recipe-react/cuisine/:type" element={<Cusine />} />
        <Route path="/recipe-react/searched/:search" element={<Searched />} />
        <Route path="/recipe-react/recipe/:name" element={<Recipe />} />
      </Routes>
    </div>
  );
}

export default Pages;
