import React, { useRef, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-profile";

const HomePage = async () => {
  const user = await initialProfile();
  console.log(user.id);
  // console.log(user?.emailAddresses[0].emailAddress);
  return (
    <div className="bg-zinc-800 h-screen">
      hello world
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default HomePage;
