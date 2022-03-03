import React from "react";
import illustrationUser from "../images/illustration-your-users.svg";

const User = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 rounded-[16px] bg-white px-10 pb-[2.063rem] pt-6 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)] xl:flex-row-reverse xl:justify-end xl:gap-[11.188rem] xl:py-0 xl:pr-4 xl:pl-[7.5rem]">
      <div className="h-[16rem] w-[16rem] xl:h-[30.55vw] xl:max-h-[27.5rem] xl:w-[30.55vw] xl:max-w-[27.5rem]">
        <img src={illustrationUser} alt="" />
      </div>
      <div className="flex w-[15.5rem] flex-col items-center gap-4 text-center xl:w-[33.12vw] xl:max-w-[29.813rem] xl:items-start xl:text-left">
        <h2 className="font-['Poppins'] text-xl font-semibold leading-[1.875rem] tracking-normal text-[#00252E] xl:text-[1.75rem] xl:leading-[2.625rem]">
          Your Users
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-[#808E9A] xl:text-lg xl:leading-[1.688rem]">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
    </section>
  );
};

export default User;
