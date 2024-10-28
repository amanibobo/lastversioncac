"use client";

import { signOutAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";

export default function UserProfile() {
  const session = useSession();
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex gap-2">
            <Image
              src={session?.data?.user?.image}
              width={24}
              height={24}
              alt="user-prof"
              className="rounded-full w-6 h-6"
            />
            
              <p className="text-sm">{session?.data?.user?.name}</p>
     
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
          <form action={signOutAction}>
            <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
              Sign Out
            </Button>
          </form>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
