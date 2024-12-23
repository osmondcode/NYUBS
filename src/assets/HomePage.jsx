import { useEffect, useState } from "react";
import Header from "./Header";
import Hero_section from "./Hero-section";
import About_section from "./About-section";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import SideBar from "./Sidebar";

function HomePage({ toggleSidebar, sideBar }) {
  const [appear, setAppear] = useState(
    "w-full min-h-screen bg-[var(--bg)] hidden flex-col items-center justify-start"
  );

  useEffect(() => {
    setTimeout(() => {
      setAppear(
        "w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start"
      );
    });
  });
  return (
    <section className="w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start">
      {" "}
      {sideBar && <SideBar toggleSidebar={toggleSidebar} />}
      <span className={appear}>
        <Header toggleSidebar={toggleSidebar} />
        <Hero_section />
        <About_section />
        <Newsletter />
        <Footer />
      </span>
    </section>
  );
}

export default HomePage;