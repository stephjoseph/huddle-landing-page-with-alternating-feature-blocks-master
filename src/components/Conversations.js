import React from "react";
import illustrationConversations from "../images/illustration-flowing-conversation.svg";

const Conversations = () => {
  return (
    <section className="flex w-full flex-col items-center gap-6 rounded-[16px] bg-white px-10  pb-14 pt-6 shadow-[0px_0px_14px_0px_rgba(0,0,0,0.07)]">
      <div className="h-[16rem] w-[16rem]">
        <img src={illustrationConversations} alt="" />
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="font-['Poppins'] text-xl font-semibold leading-[1.875rem] tracking-normal text-[#00252E]">
          Flowing Conversations
        </h2>
        <p className="text-[0.875rem] font-normal leading-[1.313rem] tracking-normal text-[#808E9A]">
          You wouldn't paginate a conversation in real life, so why do it
          online? Our threads have just-in-time loading for a more natural flow.
        </p>
      </div>
    </section>
  );
};

export default Conversations;
