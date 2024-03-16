import React, { useRef, useState } from "react";
import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div className="bg-zinc-800 h-screen">
      hello world
      <UserButton></UserButton>
    </div>
  );
};

export default HomePage;
