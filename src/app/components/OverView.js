import React from "react";
import OverViewDesk from "./OverView/OverViewDesk";
import OverViewMbl from "./OverView/OverViewMbl";

const OverView = () => {
  return (
    <div className="bg-white rounded-xl  xl:my-5 xl:mx-10    ">
      <OverViewDesk />
      <OverViewMbl />
    </div>
  );
};

export default OverView;
