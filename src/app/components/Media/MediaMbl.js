"use client";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Exhibition_opening from "../../Assetes/Exhibition_opening.jpg";
import dynamic from "next/dynamic";
import fp1 from "../../Assetes/fp1.jpeg";
import fp2 from "../../Assetes/fp2.jpeg";

const MediaMbl = () => {
  return (
    <div className=" xl:hidden  lg:h-[450px] bg-white rounded-md px-4 py-3 ">
      <p className="text-[24px] text-black font-bold my-3">Video and Images</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className=" w-full aspect-video h-[300px] md:h-full ">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Y_D4iNhgphk"
            width="100%"
            height="100%"
          />
        </div>
        <Image
          src={Exhibition_opening}
          alt={Exhibition_opening}
          className="w-full  aspect-video "
        />{" "}
        <Image src={fp1} alt={fp1} className="w-full aspect-video" />
        <Image src={fp2} alt={fp2} className="w-full aspect-video" />
      </div>

      <div className="mt-3">
        <p className="text-purple-500 text-[24px] underline text-center cursor-pointer">
          See All
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MediaMbl), { ssr: false });
