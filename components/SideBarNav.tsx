import React from "react";
import {
  RssIcon,
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import Button from "./Button";

const SideBarNav = () => {


  return (
    <div className="text-gray-500 p-3 text-sm border-r border-gray-900 overflow-y-scroll scrollbar-hide h-screen">
      <div className="space-y-4">
        <Button
          className="flex items-center space-x-2 justify-start hover:text-white border-0"
          buttonName="Home"
          icon={<HomeIcon className="w-5 h-5" />}
        />
        <Button
          className="flex items-center space-x-2 justify-start hover:text-white border-0"
          buttonName="Search"
          icon={<SearchIcon className="w-5 h-5" />}
        />
        <Button
          className="flex items-center space-x-2 justify-start hover:text-white border-0"
          buttonName="My Library"
          icon={<LibraryIcon className="w-5 h-5" />}
        />
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <Button
          className="flex items-center space-x-2 justify-start hover:text-white border-0"
          buttonName="Create Playlist"
          icon={<PlusCircleIcon className="w-5 h-5" />}
        />
        <Button
          className="flex items-center space-x-2 justify-start hover:text-white border-0"
          buttonName="Liked Song"
          icon={<HeartIcon className="w-5 h-5" />}
        />
        <Button
          className="flex items-center space-x-2 justify-start hover:text-white border-0"
          buttonName="Episodes"
          icon={<RssIcon className="w-5 h-5" />}
        />
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <p className=" cursor-pointer hover:text-white">Playlist name...</p>
      </div>
    </div>
  );
};

export default SideBarNav;
