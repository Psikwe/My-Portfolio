import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../components/About";
import Banner from "../components/Banner";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import SkillsLanguage from "../components/SkillsLanguage";

function Home() {
  return (
    <>
      <div className="dark:bg-slate-800">
        <Navbar />
        <Banner />
        <About />
        <Skills />
        <SkillsLanguage />
        <Certification />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
