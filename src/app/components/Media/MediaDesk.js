"use client";
import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import Exhibition_opening from "../../Assetes/Exhibition_opening.jpg";
import dynamic from "next/dynamic";
import fp1 from "../../Assetes/fp1.jpeg";
import fp2 from "../../Assetes/fp2.jpeg";

const MediaDesk = () => {
  return (
    <div className="bg-white py-4  px-5 hidden xl:block rounded-md ">
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
          <Image src={fp2} alt={fp2} className="w-[270px] h-[300px]" />
          <Image src={fp1} alt={fp1} className="w-[480px] h-[300px]" />
        </div>
      </div>

      <div className="mt-3">
        <p className="text-purple-500 text-[24px] underline text-center cursor-pointer">
          See All
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(MediaDesk), { ssr: false });
