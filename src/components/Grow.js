import React from "react";
import illustrationGrow from "../images/illustration-grow-together.svg";

const Grow = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 rounded-[16px] px-10  pb-[2.063rem] pt-6 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)]">
      <div className="h-[16rem] w-[16rem]">
        <img src={illustrationGrow} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-['Poppins'] text-xl font-semibold leading-[1.875rem] tracking-normal text-[#00252E]">
          Grow Together
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-[#808E9A]">
          Generate meaningful discussions with your audience and build a strong,
          loyal community. Think of the insightful conversations you miss out on
          with a feedback form.
        </p>
      </div>
    </section>
  );
};

export default Grow;
