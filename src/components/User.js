import React from "react";
import illustrationUser from "../images/illustration-your-users.svg";

const User = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 rounded-[16px] px-10  pb-[2.063rem] pt-6 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)]">
      <div className="h-[16rem] w-[16rem]">
        <img src={illustrationUser} alt="" />
      </div>
      <div className="flex w-[15.5rem] flex-col items-center gap-4 text-center">
        <h2 className="font-['Poppins'] text-xl font-semibold leading-[1.875rem] tracking-normal text-[#00252E]">
          Your Users
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-[#808E9A]">
          It takes no time at all to integrate Huddle with your app's
          authentication solution. This means, once signed in to your app, your
          users can start chatting immediately.
        </p>
      </div>
    </section>
  );
};

export default User;
