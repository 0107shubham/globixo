import React from "react";

const BussinesMbl = () => {
  return (
    <div className="py-4 px-5 w-full lg:h-[600px] xl:hidden     flex flex-col gap-1">
      <p className="text-[24px] font-bold  my-3">Company Bussiness</p>
      <p className="my-2 text-gray-700  font-semibold text-[20px]">
        Company Type
      </p>
      <div className="flex gap-4 my-3 flex-wrap">
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Contact Manufacturing
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Export
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            White Level Brand
          </p>
        </div>
      </div>
      <p className="my-2 text-gray-700  font-semibold text-[20px]">
        Product Categories
      </p>

      <div className="flex gap-4 my-3 flex-wrap">
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Fruits{" "}
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Vegetables
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Dairy{" "}
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Beverages{" "}
          </p>
        </div>
        <div className="flex w-fit lg:hidden rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Grains{" "}
          </p>
        </div>
      </div>
      <p className="my-2 text-gray-700 font-semibold text-[20px]">
        Product Items
      </p>

      <div className="flex gap-4 my-3 flex-wrap">
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Milk
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Bread
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Juices
          </p>
        </div>
        <div className="flex w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            Rice
          </p>
        </div>
        <div className="flex lg:hidden w-fit rounded-full justify-center px-5 py-2 gap-5 border-[2px] border-b-[4px] shadow-2xl border-gray-500">
          <p className="text-[13px] sm:text-[16px] md:text-[18px] font-normal  text-gray-600">
            cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default BussinesMbl;
