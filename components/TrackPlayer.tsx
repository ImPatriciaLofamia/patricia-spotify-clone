import {
  MusicNoteIcon,
  SwitchHorizontalIcon,
  VolumeUpIcon as VolumeDownIcon,
} from "@heroicons/react/outline";
import {
  RewindIcon,
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  ReplyIcon,
  VolumeUpIcon,
} from "@heroicons/react/solid";
import React, { useState, useEffect, useCallback } from "react";
import { useSession } from "next-auth/react";
import useSpotify from "@/hooks/useSpotify";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "@/atoms/songAtom";
import useSongInfo from "@/hooks/useSong";
import Button from "./Button";
import InputField from "./InputField";
import { debounce } from "lodash";

export const TrackPlayer = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState(50);
  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        setCurrentTrackId(data.body?.item?.id);

        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing);
        });
      });
    }
  };
  const handlePlayPause = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body?.is_playing) {
        spotifyApi.pause();
        setIsPlaying(false);
      } else {
        spotifyApi.play();
        setIsPlaying(true);
      }
    });
  };
  

  const handleNextSong = () => {
    spotifyApi.getMyCurrentPlaybackState().then((data) => {
      if (data.body?.is_playing) {
        spotifyApi.skipToNext()
        .then(() => {
          setTimeout(() => {
            spotifyApi.play();
            setIsPlaying(true);
          }, 300);
        });
      }
    });
  };
  
  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      fetchCurrentSong();
      setVolume(50);
    }
  }, [currentTrackIdState, spotifyApi, session]);
  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);
  const debouncedAdjustVolume = useCallback(
    debounce((volume) => {
      spotifyApi.setVolume(volume).catch((err) => {});
    }, 500),
    []
  );
  useEffect(() => {
    if (volume > 0 && volume < 100) {
      debouncedAdjustVolume(volume);
    }
  }, [volume]);

  return (
    <div className="h-24 bg-gradient-to-b from-gray-900 to-black text-white grid grid-cols-3 justify-end px-1 md:px-5">
      <div className="flex items-center space-x-2">
        <img
          className="hidden md:inline h-10 w-10"
          src={songInfo?.album?.images?.[0]?.url}
        />
        <div className="text-lg md:text-xs hidden sm:block">
          <p className="2xl:text-base sm:text-sm">{songInfo?.name}</p>
          <p className="2xl:text-base sm:text-sm">{songInfo?.artists?.[0]?.name}</p>
        </div>
      </div>
      <div className="flex items-center justify-evenly sm:gap-4 gap-2 pl-7 sm:pl-52 ">
        <Button
          buttonName=""
          imageIcon={
            <SwitchHorizontalIcon className="w-4 sm:w-5  h-4 sm:h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
          }
        />
        <Button
          buttonName=""
          imageIcon={
            <RewindIcon className="w-4 sm:w-5  h-4 sm:h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
          }
        />
        {isPlaying ? (
          <Button
            onClick={handlePlayPause}
            buttonName=""
            imageIcon={
              <PauseIcon className="w-10 h-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out " />
            }
          />
        ) : (
          <Button
            onClick={handlePlayPause}
            buttonName=""
            imageIcon={
              <PlayIcon className="w-10 h-10 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
            }
          />
        )}
        <Button
          onClick={handleNextSong}
          buttonName=""
          imageIcon={
            <FastForwardIcon className="w-4 sm:w-5  h-4 sm:h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
          }
        />
        <Button
          onClick={() => {}}
          buttonName=""
          imageIcon={
            <ReplyIcon className="w-4 sm:w-5  h-4 sm:h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out" />
          }
        />
        <div className="flex items-center space-x-4 md:space-x-6 justify-end p-5 ">
          <Button
            buttonName=""
            imageIcon={
              <VolumeDownIcon
                className="w-4 sm:w-5  h-4 sm:h-5  cursor-pointer hover:scale-125 transition transform duration-100 ease-out"
                onClick={() => volume > 0 && setVolume(volume - 10)}
              />
            }
          />
          <InputField
            type="range"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            min={0}
            max={100}
            className="w-14 md:w-36"
          />
          <Button
            buttonName=""
            imageIcon={
              <VolumeUpIcon
                className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out"
                onClick={() => volume < 100 && setVolume(volume + 10)}
              />
            }
          />
          <Button
            buttonName=""
            imageIcon={
              <MusicNoteIcon
                className="w-4 sm:w-5 h-4 sm:h-5 cursor-pointer hover:scale-125 transition transform duration-100 ease-out hidden md:block"
                onClick={() => {}}
              />
            }
          />
        </div>
      </div>
    </div>
  );
};
export default TrackPlayer;
