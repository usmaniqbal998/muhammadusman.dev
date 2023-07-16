import React from "react";
import Image from "next/image";

import profilePic from "../../public/muhammadusman.png";
import Link from "next/link";

const Avatar: React.FunctionComponent = () => {
  return (
    <Link href="/">
      <div className="w-14 overflow-hidden rounded-full">
        <Image
          className="h-auto w-full object-cover"
          src={profilePic}
          alt="Muhammad Usman"
        />
      </div>
    </Link>
  );
};

export default Avatar;
