import React from "react";
import Image from "next/image";
import men1 from "../../Assetes/men1.jpeg";
import men2 from "../../Assetes/men2.jpeg";
import men3 from "../../Assetes/men3.jpeg";

import { FaPhone } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const MemberMbl = () => {
  return (
    <div className="bg-white rounded-md px-4 py-3 xl:hidden">
      <h1 className="text-[24px] font-bold my-3">Members</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5">
        <div className="flex flex-col border-[1px] shadow-lg max-w-[450px]  border-gray-300 px-3 py-2 rounded-md gap-3">
          <div className="flex gap-3 ">
            <div>
              <Image
                src={men1}
                alt={men1}
                className="h-[60px] w-[60px] rounded-full"
              />{" "}
            </div>

            <div className="flex flex-col  ">
              <p className="text-[16px] sm:text-[18px] font-semibold text-gray-800">
                Aditi Sharma
              </p>
              <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-[1px] sm:gap-2">
              {" "}
              <FaPhone className="text-[14px] sm:text-[16px] text-gray-600 " />
              <p className="text-[14px] sm:text-[16px] text-gray-600">
                9898989898
              </p>
            </div>
            <div className="flex items-center gap-[1px]">
              <MdOutlineMail className="text-[14px] sm:text-[16px] text-gray-600" />
              <p className="text-[14px] sm:text-[16px] text-gray-600">
                Aditi2525@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-[1px] shadow-lg max-w-[450px]  border-gray-300 px-3 py-2 rounded-md gap-3">
          <div className="flex gap-3 ">
            <div>
              <Image
                src={men2}
                alt={men2}
                className="h-[60px] w-[60px] rounded-full"
              />{" "}
            </div>

            <div className="flex flex-col  ">
              <p className="text-[16px] sm:text-[18px] font-semibold text-gray-800">
                Aditi Sharma
              </p>
              <p className="text-[13px] sm:text-[16px] font-normal  text-gray-600">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-[1px] sm:gap-2">
              {" "}
              <FaPhone className="text-[14px] sm:text-[16px] text-gray-600 " />
              <p className="text-[14px] sm:text-[16px] text-gray-600">
                9898989898
              </p>
            </div>
            <div className="flex items-center gap-[1px]">
              <MdOutlineMail className="text-[14px] sm:text-[16px] text-gray-600" />
              <p className="text-[14px] sm:text-[16px] text-gray-600">
                Aditi2525@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-[1px] shadow-lg max-w-[450px]  border-gray-300 px-3 py-2 rounded-md gap-3">
          <div className="flex gap-3 ">
            <div>
              <Image
                src={men3}
                alt={men3}
                className="h-[60px] w-[60px] rounded-full"
              />{" "}
            </div>

            <div className="flex flex-col  ">
              <p className="text-[16px] sm:text-[18px] font-semibold text-gray-800">
                Aditi Sharma
              </p>
              <p className="text-[13px] sm:text-[16px]  font-normal  text-gray-600">
                Marketing Head
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-[1px] sm:gap-2">
              {" "}
              <FaPhone className="text-[14px] sm:text-[16px] text-gray-600 " />
              <p className="text-[14px] sm:text-[16px] text-gray-600">
                9898989898
              </p>
            </div>
            <div className="flex items-center gap-[1px]">
              <MdOutlineMail className="text-[14px] sm:text-[16px] text-gray-600" />
              <p className="text-[14px] sm:text-[16px] text-gray-600">
                Aditi2525@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" my-3">
        <p className="text-purple-500 text-[20px] underline text-center cursor-pointer">
          See All
        </p>
      </div>
    </div>
  );
};

export default MemberMbl;
