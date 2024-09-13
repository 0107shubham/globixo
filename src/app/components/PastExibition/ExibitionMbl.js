import React from "react";
import { IoLogoAmplify } from "react-icons/io5";
import { IoLogoCapacitor } from "react-icons/io5";
import { IoLogoFoursquare } from "react-icons/io5";
import { IoLogoStackoverflow } from "react-icons/io5";
import { PiDropboxLogoBold } from "react-icons/pi";

import Image from "next/image";

const ExibitionMbl = () => {
  return (
    <div className="bg-white px-4 py-3 flex flex-col gap-6 rounded-md xl:hidden lg:h-[620px]  ">
      <h1 className="text-[24px] text-black font-bold my-3">
        Zeloni Past Exibitions
      </h1>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoAmplify className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[16px] font-semibold text-gray-800">
              Saoudi Food Expo{" "}
            </p>
            <p className="text-[12px] font-medium text-gray-600">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoAmplify className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[16px] font-semibold text-gray-800">
              Saoudi Food Expo{" "}
            </p>
            <p className="text-[12px] font-medium text-gray-600">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoAmplify className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[16px] font-semibold text-gray-800">
              Saoudi Food Expo{" "}
            </p>
            <p className="text-[12px] font-medium text-gray-600">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoAmplify className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[16px] font-semibold text-gray-800">
              Saoudi Food Expo{" "}
            </p>
            <p className="text-[12px] font-medium text-gray-600">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 lg:gap-10">
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoAmplify className="h-[30px] md:h-[40px] w-[30px] md:w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[16px] font-semibold text-gray-800">
              Saoudi Food Expo{" "}
            </p>
            <p className="text-[12px] font-medium text-gray-400">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <p className="text-purple-600 text-[22px] text-center underline">
          Show All
        </p>
      </div>
    </div>
  );
};

export default ExibitionMbl;
