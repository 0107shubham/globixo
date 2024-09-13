import React from "react";
import MediaDesk from "./Media/MediaDesk";
import MediaMbl from "./Media/MediaMbl";

const Media = () => {
  return (
    <div className="bg-white xl:my-5 xl:mx-10 ">
      <MediaDesk />
      <MediaMbl />
    </div>
  );
};

export default Media;
