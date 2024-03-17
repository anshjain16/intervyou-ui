import React, { useRef, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { initialProfile } from "@/lib/initial-profile";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const HomePage = async () => {
  const user = await initialProfile();
  console.log(user.id);
  // console.log(user?.emailAddresses[0].emailAddress);
  return (
    <div className="flex flex-col">
      <div className="h-96 items-center justify-center w-full text-center text-3xl pl-64 pr-64 pt-44 pb-16 font-mono font-thin">
        Elevate your interview game with AI-powered mock and coding interviews
        for ultimate preparation success.
      </div>
      <div className="dark:bg-zinc-800 flex flex-row items-center justify-center h-96">
        <div>
          <Card className="dark:bg-zinc-700">
            <CardContent>General</CardContent>
          </Card>
        </div>
        <div>
          <Card className="dark:bg-zinc-700">
            <CardContent>DSA round</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
