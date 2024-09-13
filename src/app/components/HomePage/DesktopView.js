import React from "react";
// Importing from a local folder may not work well with next/image for background, so I'll comment it for now
import johndeer from "../../Assetes/johndeer.jpeg";
import Image from "next/image";
import { TbWorld } from "react-icons/tb";
import { CgCalendarDates } from "react-icons/cg";
import { FaMapMarker } from "react-icons/fa";

const DesktopView = () => {
  return (
    <div
      className="h-[500px] hidden xl:block bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/drvjsegeb/image/upload/v1726072614/Exhibition_opening_lvenr3.jpg")`,
      }}
    >
      <div className="opacity-100 absolute inset-0 h-full w-full bg-gradient-to-r from-[#967969]/100	 via-[#967969]-500/90 to-transparent/0 z-20"></div>
      <div className="absolute inset-0 h-full w-full z-40 text-white  px-[150px]  flex flex-col gap-8 py-7">
        <div className="flex gap-4  divide-slate-600 divide-y-0">
          <div className="flex gap-4">
            <div className=" bg-white py-[4px] px-1 rounded-md">
              <Image
                src={johndeer}
                alt={johndeer}
                className="h-[50px] w-[50px] "
              />
            </div>
            <div>
              <p className="text-[24px] font-medium">Zealino</p>
              <p className="text-[16px]">Resaerch and Developmnt</p>
            </div>
          </div>
          <div className="h-[60px] w-[2px] bg-white mx-4"></div>
          <div className="flex gap-4">
            <div className=" bg-white py-[4px] px-1 rounded-md">
              <Image
                src={johndeer}
                alt={johndeer}
                className="h-[50px] w-[50px] "
              />
            </div>
            <div>
              <p className="text-[24px] font-medium">Bharat Food Tech</p>
              <p className="text-[16px]">New Delhi, 2024</p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-[36px] font-bold text-white">
            Welcome to Zelono
          </h1>
          <p className="text-[36px] font-bold text-white">
            Exibition at Bharat Food Tech 2024{" "}
          </p>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="flex justify-center items-center gap-2">
            <TbWorld className="text-[24px] text-gray-200" />
            <p className="text-gray-200">New Delhi, India</p>
          </div>
          <div className="h-[30px] w-[2px] bg-gray-200 mx-4"></div>
          <div className="flex justify-center items-center gap-2">
            <CgCalendarDates className="text-[24px] text-gray-200" />
            <p className="text-gray-200">12th Jul 2024 - 15th July,2024 </p>
          </div>
          <div className="h-[30px] w-[2px] bg-gray-200 mx-4"></div>
          <div className="flex justify-center items-center gap-2">
            <FaMapMarker className="text-[24px] text-gray-200" />
            <p className="text-gray-200">Haal 2,Booth 23 </p>
          </div>
        </div>

        <button className=" bottom-2 border-gray-900 rounded-md  text-[20px]  bg-purple-600 py-3 w-[420px]">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default DesktopView;
