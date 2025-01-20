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
      <TopNavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-1 p-5 w-3/4">
          {children}
        </div>
      </div>
    </>
  );
}
