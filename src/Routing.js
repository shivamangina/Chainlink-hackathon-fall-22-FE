import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

import Home from "./pages/home/Home";
import Graph from "./pages/home/Graph";

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/graph" element={<Graph />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routing;
