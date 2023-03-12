import React, { useEffect, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

import Category from "@/components/Category";
import Cards from "@/components/Cards";
import useSpotify from "../hooks/useSpotify";
import { playlistIdState } from "../atoms/playlistAtom";
import UserProfile from "@/components/UserProfile";

function Home() {
  const router = useRouter();
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (!session?.user && status !== "loading" && status !== "authenticated") {
      router.push("/login");
    }
  }, [session]);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data: any) => {
        setPlaylists(data.body.items);
      });
    }
  }, [spotifyApi]);

  return (
    <div className="flex flex-grow bg-gradient-to-b to-black from-indigo-700 p-2 px-4">
      <div>
        <header className="absolute top-5 right-8">
          <div
            className="flex items-center p-1 pr-2 space-x-3 text-white bg-black rounded-full cursor-pointer opacity-90 hover:opacity-80"
            onClick={() => signOut()}
          >
            <UserProfile
              className="rounded-full font-bold space-x-2"
              image={session?.user?.image}
              userName={session?.user?.name}
              dropdown={<ChevronDownIcon className="w-5 h-5" />}
            />
          </div>
        </header>
        <section>
          <h1 className="pt-8 pl-4 mb-4 text-3xl text-white">
            <strong>Good morning</strong>
          </h1>
          <div className="grid gap-4 sm:grid-cols-3 grid-col-1 ">
            {playlists?.slice(0, 6).map((playlist) => (
              <div>
                <Link
                  href={`/tracks/${playlist.id}`}
                  onClick={() => setPlaylistId(playlist.id)}
                >
                  <Cards
                    key={playlist.id}
                    imageUrl={playlist.images?.[0]?.url}
                    name={playlist.name}
                  />
                </Link>
              </div>
            ))}
          </div>
          <hr className="border-t-[0.1px] border-gray-900 mt-1" />

          <h2 className="pt-8 pl-4 mb-4 text-3xl text-white text-bold">
            Made For Z
          </h2>
          <ul className="grid gap-4 md:grid-cols-4 sm:grid-cols-2 xl:grid-cols-8">
            {playlists?.map((item) => (
              <Link
                href={`/tracks/${item.id}`}
                onClick={() => setPlaylistId(item.id)}
              >
                <Category
                  key={item.id}
                  image={item?.images?.[0]?.url}
                  title={item?.name}
                  subTitle={item.description}
                />
              </Link>
            ))}
          </ul>

          <hr className="border-t-[0.1px] border-gray-900 my-8" />
        </section>
      </div>
    </div>
  );
}

export default Home;