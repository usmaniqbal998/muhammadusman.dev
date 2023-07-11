import React from "react";
import Image from "next/image";

import profilePic from "../../public/sticker.png";
import Link from "next/link";

const Avatar: React.FunctionComponent = () => {
  return (
    <Link href="/">
      <div className="flex h-12 w-12 shrink-0 rounded-full bg-contrast bg-contain p-1 ring-1 ring-accent md:h-14 md:w-14 ">
        <Image
          className="object-contain"
          src={profilePic}
          alt="Muhammad Usman"
        />
      </div>
    </Link>
  );
};

export default Avatar;
