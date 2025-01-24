"use client";

import { setSidebarState } from "@/lib/actions/sidebar";
import { Sidebar } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiInbox,
  HiMenuAlt3,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";

interface SidebarProps {
  initialState: "collapsed" | "expanded";
}

export default function SideBar2({ initialState }: SidebarProps) {
  const [state, setState] = useState<"collapsed" | "expanded">(initialState);

  const toggleSidebar = async () => {
    const newState = state === "collapsed" ? "expanded" : "collapsed";
    setState(newState);
    await setSidebarState(newState);
  };

  return (
    <div className="h-full shadow-md">
      <Sidebar
        collapsed={state === "collapsed" ? false : true}
        aria-label="Sidebar with multi-level dropdown example"
      >
        <div className={`${state === "expanded" ? "block" : "flex items-center justify-between"}`}>
          <Sidebar.Logo
            href="#"
            img="/logo.png"
            imgAlt="Flowbite logo"
            className="py-2"
          >
            Ecommerce
          </Sidebar.Logo>
          <HiMenuAlt3
            size={26}
            className="cursor-pointer m-2 mb-5 hidden md:block dark:text-white"
            onClick={toggleSidebar}
          />
        </div>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
