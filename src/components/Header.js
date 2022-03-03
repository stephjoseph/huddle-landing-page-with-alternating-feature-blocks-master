import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import bgHeroMobile from "../images/bg-hero-mobile.svg";

const Header = () => {
  return (
    <header className="relative mb-[3.688rem] flex h-[45.063rem] w-full max-w-[26.75rem] flex-col items-center bg-[#EDFBFF]">
      <div className="absolute left-0 top-0 w-full">
        <img className="w-full" src={bgHeroMobile} alt="" />
      </div>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
