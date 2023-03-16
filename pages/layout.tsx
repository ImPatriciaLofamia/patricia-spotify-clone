import React from "react";
import { SideBarNav, TrackPlayer } from "@/components";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <main>
          <div className="flex items-center">
            <SideBarNav />
            {children}
          </div>
        </main>
        <div className="sticky bottom-0">
          <TrackPlayer />
        </div>
      </div>
    </div>
  );
}
