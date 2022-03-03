import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <div className="z-10 mt-6 mb-20 flex w-[21.438rem] items-center justify-between">
      <div className="h-4 w-[6.5rem]">
        <img src={logo} alt="" />
      </div>
      <a
        className="flex h-6 w-24 items-center justify-center rounded-[12px] bg-white text-[0.625rem] font-bold leading-[0.875rem] tracking-normal text-[#00252E] shadow-[0px_2px_7px_0px_rgba(0,0,0,0.0954)]"
        href="#try"
      >
        Try It Free
      </a>
    </div>
  );
};

export default Navbar;
