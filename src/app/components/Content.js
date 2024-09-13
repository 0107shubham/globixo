"use client";
import React from "react";
import Bussiness from "./Bussiness";
import ContactCard from "./ContactCard";
import OverView from "./OverView";
import Media from "./Media";
import Files from "./Files";
import Exibition from "./Exibition";
import Member from "./Member";
import Partner from "./Partner";

const Content = () => {
  return (
    <div className="xl:px-[6vw] bg-purple-400 xl:flex xl:gap-10">
      <div className="hidden xl:block">
        {" "}
        <Bussiness />
        <OverView />
        <Media />
        <Files />
      </div>
      <div className="hidden xl:block">
        <ContactCard />
        <Exibition />
        <Member />
      </div>

      <div className="xl:hidden px-2">
        {" "}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 py-2">
          <ContactCard />
          <Bussiness />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 my-1 ">
          <OverView />
          <Media />
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2  my-1">
          <Files />
          <Exibition />
        </div>
        <div className="w-full grid grid-cols-1    my-1 ">
          <Member />
        </div>
        <div className="w-full grid grid-cols-1   my-1 ">
          <Partner />
        </div>
      </div>
    </div>
  );
};

export default Content;
