"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const User = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.email ? (
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={session?.user?.image!} />
                <AvatarFallback>{session.user.name}</AvatarFallback>
              </Avatar>
              <div>{session.user.name}</div>
            </div>
          </PopoverTrigger>
          <PopoverContent className="py-2">
            <Button onClick={() => signOut()}>SignOut</Button>
          </PopoverContent>
        </Popover>
      ) : (
        <Button onClick={() => signIn("google")}>Login</Button>
      )}
    </div>
  );
};

export default User;
