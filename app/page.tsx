"use client"

import { CustomButton } from "@/components/button/Button";
import { useSession, signOut } from "next-auth/react";

const Protected = () => {
  const { data: session } = useSession();
  
  const handleLogout = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("An error occurred during logout:", error);
    }
  };

  return (
    <>
      <>
        <div>
          <p className="text-black">{session?.user?.name}</p>
          <p className="text-black">{session?.user?.email}</p>
        </div>
        <CustomButton />
        <button className="w-40" onClick={handleLogout}>
          logout
        </button>
      </>
    </>
  );
};

export default Protected;