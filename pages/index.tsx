import React from "react";
import SideBarNav from "@/components/SideBarNav";
import { getSession } from "next-auth/react";
import TrackPlayer from "@/components/TrackPlayer";
import {Center} from "../components"

export default function Home() {
  return (
    <>
    
    </>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
};
}