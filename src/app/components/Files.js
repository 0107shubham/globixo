import React from "react";
import FilesDesk from "./Files/FilesDesk";
import FilesMbl from "./Files/FilesMbl";

const Files = () => {
  return (
    <div className="bg-white xl:my-5 xl:mx-10 xl:rounded-md  xl:relative xl:bottom-20 xl:z-50  ">
      <FilesDesk />
      <FilesMbl />
    </div>
  );
};

export default Files;
