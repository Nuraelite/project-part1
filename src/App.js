import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./details/header/Header";
import Footer from "./details/footer/Footer";
import Home from "./pages/Home";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
