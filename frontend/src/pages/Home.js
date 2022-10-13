import React from "react";
import About from "../components/About";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <div className="dark:bg-slate-800">
        <Navbar />
        <Banner />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default Home;
