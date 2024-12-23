import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./assets/Preloader";
import HomePage from "./assets/HomePage";
import Form from "./assets/Forms";
import Sidebar from "./assets/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [sideBar, setSideBar] = useState(false);

  const toggleSidebar = () => {
      setSideBar(!sideBar);
  }

  return (
    <section className="w-full min-h-screen bg-[var(--bg)] flex flex-col items-center justify-start">
      {" "}
      <Preloader />
      
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage toggleSidebar={toggleSidebar} sideBar={sideBar} />
            }
          />
          <Route
            path="/form"
            element={<Form toggleSidebar={toggleSidebar} sideBar={sideBar} />}
          />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
