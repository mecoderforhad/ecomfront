import SideBar from "@/components/custom/navigation/SideBar";
import { TopNavBar } from "@/components/custom/navigation/TopNavbar";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex-1 px-5 w-3/4">
          <TopNavBar />
          {children}
        </div>
      </div>
    </>
  );
}
