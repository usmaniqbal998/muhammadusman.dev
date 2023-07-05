import React from "react";
import Image from "next/image";

import profilePic from "../../public/sticker.png";

const Avatar: React.FunctionComponent = () => {
  return (
    <div className="flex h-12 w-12 shrink-0 rounded-full bg-contain p-1 ring-1 ring-accent md:h-14 md:w-14 ">
      <Image
        className="object-contain "
        src={profilePic}
        alt="Muhammad Usman"
      />
    </div>
  );
};

export default Avatar;
