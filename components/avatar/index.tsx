import React from "react";
import Image from "next/image";

import profilePic from "../../public/sticker.png";

const Avatar: React.FunctionComponent = (props) => {
  return (
    <Image
      className="mt-9 h-11 w-11 overflow-hidden rounded-full object-contain ring-accent"
      src={profilePic}
      alt="Muhammad Usman"
    />
  );
};

export default Avatar;
