import React, { useState, useEffect } from "react";
import {
  RssIcon,
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import Button from "./Button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import useSpotify from "@/hooks/useSpotify";
import { useRecoilState } from "recoil";
import { playlistIdState } from "../atoms/playlistAtom";

const SideBarNav = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlaylists(data.body.items);
      });
    }
  }, [session, spotifyApi]);
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

        {playlists.map((playlist) => (
          <p
            key={playlist.id}
            onClick={() => setPlaylistId(playlist.id)}
            className="cursor-pointer hover:text-white"
          >
            <Link href={`/tracks/${playlist.id}`}>{playlist.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};
export default SideBarNav;