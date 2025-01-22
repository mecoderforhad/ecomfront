"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiShoppingBag, HiUser } from "react-icons/hi";

export default function SideBar2() {
  const toggleSidebar = useAppSelector(
    (state) => state.menusReducer.isOpenSidebar
  );

  return (
    <div className="min-h-screen shadow-md">
      <Sidebar
        collapsed={toggleSidebar ? false : true}
        aria-label="Sidebar with multi-level dropdown example"
      >
        <Sidebar.Logo
          href="#"
          img="/logo.png"
          imgAlt="Flowbite logo"
          className="py-2"
        >
          Ecommerce
        </Sidebar.Logo>
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
