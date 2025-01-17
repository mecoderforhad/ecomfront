import SideBar from "@/core/navigation/SideBar";
import { TopNavBar } from "@/core/navigation/TopNavbar";
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
        <div className="mx-auto flex w-full grow gap-5 p-5">
          {children}
        </div>
      </div>
    </>
  );
}
