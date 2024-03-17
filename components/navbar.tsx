import { UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex flex-row items-center dark:bg-zinc-700 relative">
      <div className="absolute w-full text-center text-5xl font-mono">
        Intervyou
      </div>
      <div className="absolute right-2">
        <UserButton afterSignOutUrl="/"></UserButton>
      </div>
    </div>
  );
};

export default Navbar;
