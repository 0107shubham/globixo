import React from "react";
import { IoLogoAmplify } from "react-icons/io5";
import { IoLogoCapacitor } from "react-icons/io5";
import { IoLogoFoursquare } from "react-icons/io5";
import { IoLogoStackoverflow } from "react-icons/io5";
import { PiDropboxLogoBold } from "react-icons/pi";

import Image from "next/image";

const ExibitionDesktop = () => {
  return (
    <div className="bg-white  py-4  px-5  hidden xl:flex flex-col gap-6 rounded-md">
      <h1 className="text-[24px] font-bold my-3">Zeloni Past Exibitions</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoAmplify className="h-[40px] w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[18px] font-semibold text-gray-700">
              Saoudi Food Expo{" "}
            </p>
            <p className="text-[14px] font-medium text-gray-400">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoCapacitor className="h-[40px] w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[18px] font-semibold text-gray-700">
              Turkey Food Expo{" "}
            </p>
            <p className="text-[14px] font-medium text-gray-400">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoFoursquare className="h-[40px] w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[18px] font-semibold text-gray-700">
              Japan Food Expo{" "}
            </p>
            <p className="text-[14px] font-medium text-gray-400">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <IoLogoStackoverflow className="h-[40px] w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[18px] font-semibold text-gray-700">
              Brazile Food Expo{" "}
            </p>
            <p className="text-[14px] font-medium text-gray-400">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
        <div className="flex gap-5 px-3">
          <div className="bg-slate-600 p-2 rounded-full w-fit bg-blend-multiply">
            <p>
              <PiDropboxLogoBold className="h-[40px] w-[40px] text-white" />
            </p>
          </div>
          <div className="flex flex-col gap-[2px]">
            <p className="text-[18px] font-semibold text-gray-700">
              Australia Food Expo{" "}
            </p>
            <p className="text-[14px] font-medium text-gray-400">
              12th Jul 2024 - 15th July,2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExibitionDesktop;
