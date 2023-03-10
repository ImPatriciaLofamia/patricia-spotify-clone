import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../lib/time";

export const Track = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playTrack = () => {
    setCurrentTrackId(track?.track?.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track?.track?.uri],
    });
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md mt-5 cursor-pointer"
      onClick={playTrack}
    >
      <div className="flex items-center space-x-4 py-1 px-2">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track?.track?.album?.images[0].url}
        />
        <div>
          <p className="w-36 lg:w-[20rem] truncate text-white">
            {track?.track?.name}
          </p>
          <p className="w-40">{track?.track?.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline w-40 lg:w-96 truncate">
          {track.track.album.name}
        </p>
        <p>{millisToMinutesAndSeconds(track?.track?.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Track;
