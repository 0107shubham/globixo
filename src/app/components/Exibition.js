import React from "react";
import ExibitionDesktop from "./PastExibition/ExibitionDesktop";
import ExibitionMbl from "./PastExibition/ExibitionMbl";

const Exibition = () => {
  return (
    <div className="bg-white rounded-xl">
      <ExibitionDesktop />
      <ExibitionMbl />
    </div>
  );
};

export default Exibition;
