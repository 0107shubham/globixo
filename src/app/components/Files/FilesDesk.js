import React from "react";
import Exhibition_opening from "../../Assetes/Exhibition_opening.jpg";
import Image from "next/image";
import foodshow1 from "../../Assetes/foodshow1.jpeg";
import foodshow3 from "../../Assetes/foodshow3.jpeg";
import foodshow4 from "../../Assetes/foodshow4.jpeg";

const FilesDesk = () => {
  return (
    <div className="bg-white  hidden xl:block py-4  px-5  rounded-md">
      <p className="text-[24px] text-black font-bold my-3">Files</p>
      <div className="flex justify-between gap-5 ">
        <div className="bg-white p-4 rounded-md border border-gray-400">
          <Image
            src={foodshow1}
            alt={foodshow1}
            className="w-[220px] h-[160px] "
          />
          <p className="text-center text-[18px] my-2 text-black font-normal">
            File Name 1
          </p>
        </div>
        <div className="bg-white p-4 rounded-md border border-gray-400">
          <Image
            src={foodshow3}
            alt={foodshow3}
            className="w-[220px] h-[160px] "
          />
          <p className="text-center text-[18px] my-2 text-black font-normal">
            File Name 1
          </p>
        </div>
        <div className="bg-white p-4 rounded-md border border-gray-400">
          <Image
            src={foodshow4}
            alt={foodshow4}
            className="w-[220px] h-[160px] "
          />
          <p className="text-center text-[18px] my-2 text-black font-normal">
            File Name 1
          </p>
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

export default FilesDesk;
