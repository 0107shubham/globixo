"use client";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Exhibition_opening from "../../Assetes/Exhibition_opening.jpg";
import dynamic from "next/dynamic";

const MediaDesk = () => {
  return (
    <div className="bg-white px-4 py-3 hidden xl:block rounded-md ">
      <p className="text-[24px] text-black font-bold my-3">Video and Images</p>
      <div className="flex flex-col   gap-5">
        <div className="flex gap-5 w-full justify-center ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Y_D4iNhgphk"
            width="480px"
            height="300px"
          />
          <Image
            src={Exhibition_opening}
            alt={Exhibition_opening}
            className="w-[270px] h-[300px]"
          />
        </div>
        <div className="flex gap-5 w-full justify-center ">
          {" "}
          <Image
            src={Exhibition_opening}
            alt={Exhibition_opening}
            className="w-[270px] h-[300px]"
          />
          <Image
            src={Exhibition_opening}
            alt={Exhibition_opening}
            className="w-[480px] h-[300px]"
          />
        </div>
      </div>

      <div className="">
        <p className="text-purple-500 text-[24px] underline text-center cursor-pointer">
          See All
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MediaDesk), { ssr: false });
