import { ChevronDownIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import UserProfile from "./UserProfile";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import useSpotify from "@/hooks/useSpotify";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "from-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-orange-500",
  "from-purple-500",
];
function Center(){
  const { data: session, status } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlists, setPlaylist] = useRecoilState(playlistState);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
  spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
        console.log('data.body', data.body);
      })
      .catch((err) => console.log('Something went wrong!', err));
    }, [spotifyApi, playlistId]);
  const handleToggle = () => {
    setActive(!isActive);
  }
  
  return (
    <div className="flex flex-grow">
      <header className="absolute top-5 right-8">
        <div className="bg-black text-white items-center opacity-90 hover:opacity-80 space-x-7 cursor-pointer py-1 pr-2 px-1 rounded-full">
          <UserProfile
            className="rounded-full font-bold space-x-2"
            image={session?.user?.image}
            userName={session?.user?.name}
            dropdown={<ChevronDownIcon className="w-5 h-5" />}
          />
        </div>
      </header>
      <div>

      </div>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black 
      ${color} h-80 text-white px-5 w-full`}
      >
        <img className="w-44 h-44 shadow-2xl" src={playlists?.images?.[0]?.url} />
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2x1 md:text-3x1 xl:text-5xl font-bold">
            {playlists?.name}
          </h1>
        </div>
      </section>
    </div>
  );
};
export default Center;