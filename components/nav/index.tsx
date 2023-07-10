import * as React from "react";

import Link from "next/link";
import { postsIcon, twitterIcon, youtubeIcon } from "../Icons";

const navItems = [
  { title: "Posts", icon: postsIcon, url: "#" },
  {
    title: "Twitter",
    icon: twitterIcon,
    url: "https://twitter.com/usman_dev_",
  },
  { title: "Youtube", icon: youtubeIcon, url: "#" },
];

const Nav: React.FunctionComponent = () => {
  return (
    <div className="flex w-full items-center justify-center lg:relative">
      <nav className="fixed bottom-8 z-10 items-center  justify-between gap-6 rounded-full bg-nav px-6 py-3 ring-1 ring-navStroke backdrop-blur sm:bottom-auto sm:top-8 sm:flex  sm:w-102">
        <ul className="flex w-full items-center justify-between gap-4">
          {navItems.map(({ title, icon, url }) => (
            <Link href={url} key={title}>
              <li className="flex cursor-pointer items-center gap-1">
                {icon}
                <p className="text-lg">{title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
