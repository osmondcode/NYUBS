import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./assets/Preloader";
import HomePage from "./assets/HomePage";
import Form from "./assets/Forms";
import Footer from "./assets/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start">
      {" "}
      <Preloader />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route  path="/form" element={<Form />} />
      </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
