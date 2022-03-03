import React from "react";
import Grow from "./Grow";
import Conversations from "./Conversations";
import User from "./User";
import CTA from "./CTA";

const Main = () => {
  return (
    <main className="z-10 flex w-[20.938rem] flex-col items-center gap-[7.5rem] xl:w-[88.88vw] xl:max-w-[80rem] xl:gap-[10rem]">
      <div className="flex w-full flex-col items-center gap-10">
        <Grow />
        <Conversations />
        <User />
      </div>
      <CTA />
    </main>
  );
};

export default Main;
