import React from "react";
import SideBarNav from "@/components/SideBarNav";
import Center from "@/components/Center";

export default function Home() {
  return (
    <>
      <div className="bg-black h-screen ">
        <main className="flex overflow-scroll scrollbar">
        <SideBarNav />
        <Center />
        </main>
      </div>
    </>
  );
}
