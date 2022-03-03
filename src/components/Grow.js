import React from "react";
import illustrationGrow from "../images/illustration-grow-together.svg";

const Grow = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 rounded-[16px] bg-white px-10 pb-[2.063rem] pt-6 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)] xl:flex-row-reverse xl:justify-end xl:gap-[10.5rem] xl:py-0 xl:pr-4 xl:pl-[7.5rem]">
      <div className="h-[16rem] w-[16rem] xl:h-[30.55vw] xl:max-h-[27.5rem] xl:w-[30.55vw] xl:max-w-[27.5rem]">
        <img src={illustrationGrow} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center xl:w-[33.88vw] xl:max-w-[30.5rem] xl:items-start xl:text-left">
        <h2 className="font-['Poppins'] text-xl font-semibold leading-[1.875rem] tracking-normal text-[#00252E] xl:text-[1.75rem] xl:leading-[2.625rem]">
          Grow Together
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-[#808E9A] xl:text-lg xl:leading-[1.688rem]">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
    </section>
  );
};

export default Grow;
