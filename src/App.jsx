import { useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import Hero_section from "./assets/Hero-section";
import About_section from "./assets/About-section";
import Newsletter from "./assets/Newsletter";
import Footer from "./assets/Footer";

function App() {
  return (
    <section className="w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start">
      {" "}
      <Header />
      <Hero_section />
      <About_section />
      <Newsletter />
      <Footer />
    </section>
  );
}

export default App;
