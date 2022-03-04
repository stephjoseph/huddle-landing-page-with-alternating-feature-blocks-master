import React from "react";

const CTA = () => {
  return (
    <section className="flex w-[22rem] flex-col items-center gap-6 rounded-[16px] bg-white px-[0.75rem] py-[2.563rem] text-center shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)] xl:w-[50rem] xl:gap-8 xl:rounded-[15px] xl:pr-[7.938rem] xl:pl-[8.25rem] xl:pb-[3.25rem] xl:pt-14">
      <h2 className="font-['Poppins'] text-lg font-semibold leading-[1.875rem] tracking-normal text-[#00252E] xl:text-[2rem] xl:leading-[3.75rem]">
        Ready To Build Your Community?
      </h2>
      <a
        className="active`:bg-[#FF9ADB] flex h-10 w-[12.5rem] items-center justify-center rounded-[20px] bg-[#FF52C1] text-[0.625rem] font-bold leading-[0.938rem] tracking-normal text-white shadow-[0px_3px_7px_rgba(0,37,46,0.2231)] xl:h-20 xl:w-[25rem] xl:rounded-[40px] xl:text-xl xl:leading-[1.875rem] xl:shadow-[0px_6px_13px_rgba(0,37,46,0.2231)]"
        href="#"
      >
        Get Started For Free
      </a>
    </section>
  );
};

export default CTA;
