import React from "react";
import OverViewDesk from "./OverView/OverViewDesk";
import OverViewMbl from "./OverView/OverViewMbl";

const OverView = () => {
  return (
    <div className="bg-white   xl:my-5 xl:mx-10 xl:rounded-md xl:relative xl:bottom-20 xl:z-50   ">
      <OverViewDesk />
      <OverViewMbl />
    </div>
  );
};

export default OverView;
