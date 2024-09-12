import React from "react";

import partner1 from "../Assetes/partner1.jpeg";
import paerner2 from "../Assetes/paerner2.jpeg";
import parner3 from "../Assetes/parner3.png";
import partner4 from "../Assetes/partner4.png";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="bg-white sm:hidden px-4 py-3 rounded-md xl:hidden">
      <p className="text-[24px] text-black font-bold my-3">Clients</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div className="bg-gray-300 p-4 rounded-md border  border-gray-400 ">
          <Image
            src={partner1}
            alt={partner1}
            className="w-full aspect-video rounded-md mix-blend-darken"
          />
        </div>
        <p className="text-center text-[18px] my-2 text-black font-normal">
          Gourment Heaven Food
        </p>
        <div className="bg-gray-300  p-4 rounded-md border border-gray-400">
          <Image
            src={paerner2}
            alt={paerner2}
            className="w-full aspect-video rounded-md mix-blend-darken"
          />
        </div>
        <p className="text-center text-[18px] my-2 text-black font-normal">
          TasteQuest Creation
        </p>
        <div className="bg-gray-300 p-4 rounded-md border border-gray-400">
          <Image
            src={partner4}
            alt={partner4}
            className="w-full aspect-video rounded-md mix-blend-darken"
          />
        </div>
        <p className="text-center text-[18px] my-2 text-black font-normal">
          Freshness Delights
        </p>
        <div className="bg-gray-300 p-4 rounded-md border border-gray-400">
          <Image
            src={parner3}
            alt={parner3}
            className="w-full aspect-video rounded-md mix-blend-darken"
          />
        </div>
        <p className="text-center text-[18px] my-2 text-black font-normal">
          Flavour Scope Fusion
        </p>
      </div>
      <div className="">
        <p className="text-purple-500 text-[24px] underline text-center cursor-pointer">
          See All
        </p>
      </div>
    </div>
  );
};

export default Partner;
