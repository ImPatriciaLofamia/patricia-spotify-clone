import { playlistState } from "@/atoms/playlistAtom";
import React from "react";
import { useRecoilValue } from "recoil";
import Track from './Track';

export const Tracks = () => {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="text-white px-6 flex flex-col mt-3 space-y-1 pb-1 text-sm sm:text-base">
      {playlist?.tracks?.items?.map((track, i) => (
        <Track key={track?.track?.id} track={track} order={i} />
      ))}
    </div>
  );
}

export default Tracks;
