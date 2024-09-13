import React from "react";
import MediaDesk from "./Media/MediaDesk";
import MediaMbl from "./Media/MediaMbl";

const Media = () => {
  return (
    <div className="bg-white xl:my-5 xl:mx-10 xl:rounded-md xl:relative xl:bottom-20 xl:z-50   ">
      <MediaDesk />
      <MediaMbl />
    </div>
  );
};

export default Media;
