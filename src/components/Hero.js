import React from "react";
import illustrationMockups from "../images/illustration-mockups.svg";

const Hero = () => {
  return (
    <div className="z-10 mb-[2.313rem] flex w-[19rem] flex-col items-center gap-14 xl:mb-0 xl:w-[88.88vw] xl:max-w-[80rem] xl:flex-row xl:items-start">
      <div className="flex flex-col items-center gap-8  xl:mt-[5.375rem] xl:w-[37.22vw] xl:max-w-[33.5rem] xl:items-start">
        <div className="flex flex-col items-center gap-6 text-center  xl:items-start xl:text-left">
          <h1 className="font-['Poppins'] text-2xl font-semibold leading-9 tracking-normal text-[#00252E] xl:text-[2.5rem] xl:leading-[3.75rem]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-base font-normal tracking-normal text-[#00252E] xl:text-lg xl:leading-[1.688rem]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <a
          className="flex h-10 w-[15rem] items-center justify-center rounded-[20px] bg-[#FF52C1] text-[0.75rem] font-bold leading-4 tracking-normal text-white shadow-[2px_3px_6px_1px_rgba(255,82,193,0.1662)] xl:h-14 xl:w-[17.5rem] xl:rounded-[28px] xl:text-[0.875rem] xl:leading-[1.188rem]"
          href="#get-started"
        >
          Get Started For Free
        </a>
      </div>
      <div>
        <img
          className="h-[13.063rem] w-[18.5rem] xl:h-[33.47vw] xl:max-h-[30.125rem] xl:w-[47.22vw] xl:max-w-[42.5rem]"
          src={illustrationMockups}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
