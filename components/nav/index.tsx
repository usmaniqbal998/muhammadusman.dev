import * as React from "react";

import { postsIcon, twitterIcon, youtubeIcon } from "../Icons";

const navItems = [
  { title: "Posts", icon: postsIcon },
  { title: "Twitter", icon: twitterIcon },
  { title: "Youtube", icon: youtubeIcon },
];

const Nav: React.FunctionComponent = () => {
  return (
    <div className="flex w-full items-center justify-center lg:relative">
      <nav className="fixed bottom-8 z-10 items-center  justify-between gap-6 rounded-full bg-nav px-6 py-3 ring-1 ring-navStroke backdrop-blur sm:bottom-auto sm:top-8 sm:flex  sm:w-102">
        <ul className="flex w-full items-center justify-between gap-4">
          {navItems.map(({ title, icon }) => (
            <li key={title} className="flex cursor-pointer items-center gap-1">
              {icon}
              <p className="text-lg">{title}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
