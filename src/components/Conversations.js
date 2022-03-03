import React from "react";
import illustrationConversations from "../images/illustration-flowing-conversation.svg";

const Conversations = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 rounded-[16px] bg-white px-10 pb-14  pt-6 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)] xl:flex-row xl:gap-[9.688rem]  xl:py-0  xl:pr-[1.813rem] xl:pl-[6.813rem]">
      <div className="h-[16rem] w-[16rem] xl:h-[30.55vw] xl:max-h-[27.5rem] xl:w-[30.55vw] xl:max-w-[27.5rem]">
        <img src={illustrationConversations} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center xl:w-[34.65vw] xl:max-w-[31.188rem] xl:items-start xl:text-left">
        <h2 className="font-['Poppins'] text-xl font-semibold leading-[1.875rem] tracking-normal text-[#00252E] xl:text-[1.75rem] xl:leading-[2.625rem]">
          Flowing Conversations
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-[#808E9A] xl:text-lg xl:leading-[1.688rem]">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </section>
  );
};

export default Conversations;
