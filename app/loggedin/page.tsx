"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Tasks from "../components/civix/task";
import { Button } from "@/components/ui/button";
import { signInAction } from "@/actions/auth-action";
import UserProfile from "../components/civix/user-profile";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Component from "@/components/amanibar";
import CivixMarketplace from "@/components/civix-marketplace";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
     <Component>
      <CivixMarketplace />
     </Component>
    </div>
  );
}
