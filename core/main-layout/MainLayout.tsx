"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { TopNavBar } from "../navigation/TopNavbar";
import SideBar from "../navigation/SideBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noLayoutRoutes = ["/signin"];
  const shouldShowLayout = !noLayoutRoutes.includes(pathname);

  return (
    <>
      {shouldShowLayout && <TopNavBar />}
      {shouldShowLayout && <SideBar />}
      <div className={`${shouldShowLayout && "px-8 py-4"}`}>{children}</div>
    </>
  );
}