import React from "react";
import { Login } from "./Login";
import SideBarNav from "@/components/SideBarNav";

export default function Home() {
  return (
    <>
      <div className="bg-black h-screen overflow-hidden">
        <SideBarNav />
      </div>
      {/* <Login/> */}
    </>
  );
}
