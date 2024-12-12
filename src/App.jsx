import { useEffect, useState } from "react";
import "./App.css";
import Header from "./assets/Header";
import Preloader from "./assets/Preloader";
import Hero_section from "./assets/Hero-section";
// import Loading from "./assets/LoadingSpinner";
import About_section from "./assets/About-section";
import Newsletter from "./assets/Newsletter";
import Footer from "./assets/Footer";

function App() {
  const [appear, setAppear] = useState(
    "w-full min-h-screen bg-[var(--bg)] hidden flex-col items-center justify-start"
  );

  useEffect(() => {
    setTimeout(() => {
      setAppear(
        "w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start"
      );
    }, 300);
  });
  return (
    <section className="w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start">
      {" "}
      <Preloader />
      <span className={appear}>
        {/* <Loading /> */}
        <Header />
        <Hero_section />
        <About_section />
        <Newsletter />
        <Footer />
      </span>
    </section>
  );
}

export default App;
