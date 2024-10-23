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

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div>
     <Component>
      <h1>The Database connect to api will go here</h1>
     </Component>
    </div>
  );
}
