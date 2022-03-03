import React from "react";
import illustrationMockups from "../images/illustration-mockups.svg";

const Hero = () => {
  return (
    <div className="z-10 mb-[2.313rem] flex w-[19rem] flex-col items-center gap-14">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-['Poppins'] text-2xl font-semibold leading-9 tracking-normal text-[#00252E]">
            Build The Community Your Fans Will Love
          </h1>
          <p className="text-base font-normal tracking-normal text-[#00252E]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
        </div>
        <a
          className="flex h-10 w-[15rem] items-center justify-center rounded-[20px] bg-[#FF52C1] text-[0.75rem] font-bold leading-4 tracking-normal text-white shadow-[2px_3px_6px_1px_rgba(255,82,193,0.1662)]"
          href="#get-started"
        >
          Get Started For Free
        </a>
      </div>
      <div>
        <img
          className="h-[13.063rem] w-[18.5rem]"
          src={illustrationMockups}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
