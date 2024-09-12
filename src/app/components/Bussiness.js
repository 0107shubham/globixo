import React from "react";
import BussinesDesk from "./Bussiness/BussinesDesk";
import BussinesMbl from "./Bussiness/BussinessMbl";

const Bussiness = () => {
  return (
    <div className=" xl:my-5 xl:mx-10 bg-white  rounded-xl  xl:relative xl:bottom-20 xl:z-50  ">
      <BussinesDesk />
      <BussinesMbl />
    </div>
  );
};

export default Bussiness;
