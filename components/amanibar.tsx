"use client";

import * as React from "react";
import {
  Check,
  ChevronsUpDown,
  GalleryVerticalEnd,
  Search,
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import UserProfile from "@/app/components/civix/user-profile";
import Tasks from "@/app/components/civix/task";
import { Button } from "./ui/button";
import { signOutAction } from "@/actions/auth-action";
import { ComponentProps } from "react";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Tabs",
      url: "#",
      items: [
        {
          title: "Explore",
          url: "/loggedin",
        },
        {
          title: "Senator Database",
          url: "/loggedin/people",
        },
        {
          title: "Education",
          url: "/loggedin/education",
        },
        {
          title: "Community",
          url: "/loggedin/community",
        },
        {
          title: "Create a Post",
          url: "/loggedin/create-a-post",
        },
      ],
    },
  ],
};

export default function Component({ children }: ComponentProps<any>) {
  const [activeItem, setActiveItem] = React.useState(null);
  const [selectedVersion, setSelectedVersion] = React.useState(
    data.versions[0]
  );

  return (
    <SidebarProvider>
      <Sidebar variant="floating">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-gray-100 "
                  >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <GalleryVerticalEnd className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                      <span className="font-semibold text-gray-900">Civix</span>
                      <span className="text-gray-500">user-email</span>
                    </div>
                    <ChevronsUpDown className="ml-auto text-gray-500" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width]">
                  <form action={signOutAction}>
                    <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                      Sign Out
                    </Button>
                  </form>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
          <form>
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <SidebarInput
                  id="search"
                  placeholder="Search Civix..."
                  className="pl-8 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none text-gray-400" />
              </SidebarGroupContent>
            </SidebarGroup>
          </form>
        </SidebarHeader>
        <SidebarContent>
          {data.navMain.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel className="text-gray-900 font-semibold">
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={activeItem === item.title}
                        className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 data-[active=true]:bg-blue-50 data-[active=true]:text-blue-600"
                        onClick={() => setActiveItem(item.title)}
                      >
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarRail className="bg-gray-50" />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-200 bg-white px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1 text-gray-600 hover:text-gray-900 hover:bg-gray-100" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 bg-gray-200"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink
                    href="#"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Civix
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-gray-400" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-gray-900">
                    {activeItem}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <UserProfile />
        </header>

        <main className="min-h-[calc(100vh-4rem)] p-4 md:p-6 bg-gray-50">
          <div className="mx-auto max-w-7xl space-y-4">
            {children}
            <Tasks />
            <div className="min-h-[100vh] flex-1 rounded-xl bg-white md:min-h-min" />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
