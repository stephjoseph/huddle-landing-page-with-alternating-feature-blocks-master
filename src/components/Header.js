import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import bgHeroMobile from "../images/bg-hero-mobile.svg";
import bgHeroDesktop from "../images/bg-hero-desktop.svg";

const Header = () => {
  return (
    <header className="relative mb-[3.688rem] flex h-[45.063rem] w-full max-w-[26.75rem] flex-col items-center bg-[#EDFBFF] xl:mb-[10rem] xl:h-[51.45vw] xl:max-h-[46.313rem] xl:max-w-[90rem]">
      <div className="absolute left-0 top-0">
        <img className="w-full xl:hidden" src={bgHeroMobile} alt="" />
        <img className="hidden w-full xl:block" src={bgHeroDesktop} alt="" />
      </div>
      <Navbar />
      <Hero />
    </header>
  );
};

export default Header;
