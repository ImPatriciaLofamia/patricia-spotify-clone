import React from "react";
import SideBarNav from "@/components/SideBarNav";
import Center from "@/components/Center";
import { getSession } from "next-auth/react";

export default function Home() {
  return (
    <div className="bg-black h-screen ">
      <main className="flex overflow-scroll scrollbar">
        <SideBarNav />
        <Center />
      </main>
    </div>
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