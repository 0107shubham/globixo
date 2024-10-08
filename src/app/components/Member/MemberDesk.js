import React from "react";
import Image from "next/image";
import men1 from "../../Assetes/men1.jpeg";
import men2 from "../../Assetes/men2.jpeg";
import men3 from "../../Assetes/men3.jpeg";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const MemberDesk = () => {
  return (
    <div className="bg-white py-4  px-5  rounded-lg hidden xl:block mt-10">
      <h1 className="text-[24px] font-bold my-3">Members</h1>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col border-[1px] shadow-lg border-gray-300 px-3 py-2 rounded-md gap-3">
          <div className="flex gap-3 ">
            <div>
              <Image
                src={men1}
                alt={men1}
                className="h-[60px] w-[60px] rounded-full"
              />{" "}
            </div>

            <div className="flex flex-col  ">
              <p className="text-[18px] font-semibold text-gray-700">
                Aditi Sharma
              </p>
              <p className="text-[15px] font-medium  text-gray-400">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {" "}
              <FaPhone className="text-[16px] text-gray-600 " />
              <p className="text-[16px] text-gray-600">9898989898</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-[16px] text-gray-600" />
              <p className="text-[16px] text-gray-600">Aditi2525@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-[1px] border-gray-300 px-3 py-2 rounded-md gap-3">
          <div className="flex gap-3 ">
            <div>
              <Image
                src={men3}
                alt={men3}
                className="h-[60px] w-[60px] rounded-full"
              />{" "}
            </div>

            <div className="flex flex-col  ">
              <p className="text-[18px] font-semibold text-gray-700">
                Aditi Sharma
              </p>
              <p className="text-[15px] font-medium  text-gray-400">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {" "}
              <FaPhone className="text-[16px] text-gray-600 " />
              <p className="text-[16px] text-gray-600">9898989898</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-[16px] text-gray-600" />
              <p className="text-[16px] text-gray-600">Aditi2525@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-[1px] border-gray-300 px-3 py-2 rounded-md gap-3">
          <div className="flex gap-3 ">
            <div>
              <Image
                src={men2}
                alt={men2}
                className="h-[60px] w-[60px] rounded-full"
              />{" "}
            </div>

            <div className="flex flex-col  ">
              <p className="text-[18px] font-semibold text-gray-700">
                Aditi Sharma
              </p>
              <p className="text-[15px] font-medium  text-gray-400">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              {" "}
              <FaPhone className="text-[16px] text-gray-600 " />
              <p className="text-[16px] text-gray-600">9898989898</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineMail className="text-[16px] text-gray-600" />
              <p className="text-[16px] text-gray-600">Aditi2525@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-3">
        <p className="text-purple-500 text-[24px] underline text-center cursor-pointer">
          See All
        </p>
      </div>
    </div>
  );
};

export default MemberDesk;
