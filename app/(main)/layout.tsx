// import SideBar from "@/components/custom/navigation/SideBar";
import SideBar2 from "@/components/custom/navigation/Sidebar2";
import { TopNavBar } from "@/components/custom/navigation/TopNavbar";
import { cookies } from "next/headers";
  
import React from "react";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = cookies();
  const sidebarState =  (await cookieStore).get("sidebarState")?.value as "collapsed" | "expanded" || "expanded";
  
  return (
    <>
      <div className="flex">
        {/* <SideBar /> */}
        <SideBar2 initialState={sidebarState} />
        <div className="flex-1 px-5 w-3/4">
          <TopNavBar />
          {children}
        </div>
      </div>
    </>
  );
}
