"use client";

import {
  Avatar,
  DarkThemeToggle,
  Dropdown,
  Modal,
  Navbar,
} from "flowbite-react";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { MdDashboard } from "react-icons/md";



export function TopNavBar() {
  const [user, setUser] = useState<any>({});
  const [openModal, setOpenModal] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState(false);
  const session: any = useSession();

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

  const handleDropdown = ()=>setOpenSubmenus(!openSubmenus)

  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite
        </span>
      </Navbar.Brand>
      <div className="flex">
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
        <Navbar.Toggle onClick={() => setOpenModal(true)} />
      </div>
      <Modal className="md:hidden" dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Ecommarce</Modal.Header>
        <Modal.Body>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <MdDashboard />
                  <span className="ms-3">Dashboard</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  onClick={handleDropdown}
                >
                  <MdShoppingCart /> 
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    E-commerce
                  </span>
                  <MdArrowForwardIos />
                </button>
                <ul id="dropdown-example" className={`${openSubmenus? "" : "hidden py-2 space-y-2"}`}>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Billing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Invoice
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}
