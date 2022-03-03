import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="z-10 mt-6 mb-20 flex w-[21.438rem] items-center justify-between xl:mb-[4.438rem] xl:mt-12 xl:w-[88.88vw] xl:max-w-[80rem]">
      <a href="#" className="h-4 w-[6.5rem] xl:h-[1.938rem] xl:w-[12.5rem]">
        <img src={logo} alt="" />
      </a>
      <a
        className="flex h-6 w-24 items-center justify-center rounded-[12px] bg-white text-[0.625rem] font-bold leading-[0.875rem] tracking-normal text-[#00252E] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.0954)] active:text-[#808E9A] xl:h-12 xl:w-[12.5rem] xl:rounded-[24px] xl:text-[0.875rem] xl:leading-[1.188rem] xl:shadow-[0px_3px_11px_0px_rgba(0,0,0,0.0954)]"
        href="#try"
      >
        Try It Free
      </a>
    </div>
  );
};

export default Navbar;
