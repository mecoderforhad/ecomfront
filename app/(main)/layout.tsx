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
      <div className="flex min-h-screen">
        <SideBar />
        <div className="flex-1 p-5">
          {children}
        </div>
      </div>
    </>
  );
}
