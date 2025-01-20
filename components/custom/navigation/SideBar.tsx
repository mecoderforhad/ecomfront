"use client";

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {
  FiMessageSquare,
  FiFolder,
  FiShoppingCart,
  FiChevronRight,
  FiChevronDown,
} from "react-icons/fi";

const SideBar = () => {
  const [open, setOpen] = useState(false); // For large screen toggle
  const [showSidebar, setShowSidebar] = useState(true); // For small screen toggle
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState<string | null>(null);

  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "User", link: "/", icon: AiOutlineUser },
    {
      name: "Messages",
      link: "/",
      icon: FiMessageSquare,
      subMenu: [
        {
          name: "Inbox",
          link: "/",
          subSubMenu: [
            { name: "Unread", link: "/" },
            { name: "Archived", link: "/" },
          ],
        },
        { name: "Sent", link: "/" },
      ],
    },
    { name: "Analytics", link: "/", icon: TbReportAnalytics },
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-white text-gray-800 shadow-md dark:bg-gray-800 dark:text-gray-50 min-h-screen ${
          open ? "w-60" : "w-14"
        } md:static ${
          showSidebar ? "fixed z-50" : "hidden"
        } md:block text-gray-100`}
      >
        {/* Sidebar Toggle Button */}
        

        {/* Sidebar Menu */}
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => !open && setExpandedMenu(menu.name)}
              onMouseLeave={() => !open && setExpandedMenu(null)}
            >
              <div
                className="flex items-center justify-start gap-3.5 px-4 py-2 hover:bg-slate-100 dark:bg-slate-800 cursor-pointer"
                onClick={() =>
                  setExpandedMenu(expandedMenu === menu.name ? null : menu.name)
                }
              >
                <div className="flex items-center gap-3.5">
                  {React.createElement(menu.icon, { size: "26" })}
                </div>
                <h2
                  style={{
                    transitionDelay: `${i + 3}00ms`,
                  }}
                  className={`whitespace-pre text-base ${
                    !open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
                >
                  {menu.name}
                </h2>
                {menu.subMenu &&
                  (expandedMenu === menu.name ? (
                    <FiChevronDown />
                  ) : (
                    <FiChevronRight />
                  ))}
              </div>

              {/* SubMenu */}
              {menu.subMenu && expandedMenu === menu.name && (
                <div
                  className={`bg-slate-800 text-white shadow-lg ${
                    !open && "absolute left-full top-0"
                  }`}
                >
                  {menu.subMenu.map((subMenu, j) => (
                    <div
                      key={j}
                      className="group relative"
                      onMouseEnter={() =>
                        !open && setExpandedSubMenu(subMenu.name)
                      }
                      onMouseLeave={() => !open && setExpandedSubMenu(null)}
                    >
                      <div
                        className="flex justify-between items-center px-4 py-2 bg-white text-slate-800 dark:bg-slate-800 dark:text-white cursor-pointer"
                        onClick={() =>
                          setExpandedSubMenu(
                            expandedSubMenu === subMenu.name
                              ? null
                              : subMenu.name
                          )
                        }
                      >
                        <span>{subMenu.name}</span>
                        {subMenu.subSubMenu &&
                          (expandedSubMenu === subMenu.name ? (
                            <FiChevronDown className="mx-1" />
                          ) : (
                            <FiChevronRight className="mx-1" />
                          ))}
                      </div>

                      {/* SubSubMenu */}
                      {subMenu.subSubMenu &&
                        expandedSubMenu === subMenu.name && (
                          <div
                            className={`bg-slate-700 text-white shadow-lg ${
                              !open && "absolute left-full top-0"
                            }`}
                          >
                            {subMenu.subSubMenu.map((subSubMenu, k) => (
                              <a
                                key={k}
                                href={subSubMenu.link}
                                className="block px-4 py-2 bg-white text-slate-800 dark:bg-slate-800 dark:text-white"
                              >
                                {subSubMenu.name}
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}
                </div>
              )}

              {/* Show main menu name on hover if there is no sub-menu */}
              {!menu.subMenu && !open && (
                <div className="absolute left-full top-0 bg-white text-slate-800 dark:bg-slate-800 px-4 py-2 dark:text-white shadow-lg group-hover:block  hidden">
                  {menu.name}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Backdrop for Small Screens */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
    </>
  );
};

export default SideBar;
