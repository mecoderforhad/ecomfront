"use client";

import { Avatar, DarkThemeToggle, Dropdown, Navbar } from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { toggleSidebar } from "@/lib/store/features/menusSlice";
import { useAppDispatch } from "@/lib/store/hooks";

export function TopNavBar() {
  const [user, setUser] = useState<any>({});
  const session: any = useSession();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setUser(session?.data?.user);
  }, [session.data]);

  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <Navbar fluid rounded>
      <div className="flex md:order-2">
        <div className="px-2">
          <DarkThemeToggle />
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">{user?.name}</span>
            <span className="block truncate text-sm font-medium">
              {user?.email}
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div className={`py-3 flex`}>
        <HiMenuAlt3
          size={26}
          className="cursor-pointer hidden md:block dark:text-white"
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
    </Navbar>
  );
}
