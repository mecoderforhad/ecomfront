"use client";

import { CustomButton } from "@/components/button/Button";
import { SideBar } from "@/core/navigation/SideBar";
import { useSession, signOut } from "next-auth/react";

const Protected = () => {
  const { data: session } = useSession();
  return <>dashboard</>;
};

export default Protected;
