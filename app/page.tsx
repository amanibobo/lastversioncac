"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Tasks from "./components/civix/task";
import { signInAction } from "@/actions/auth-action";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronRightIcon,
  BarChartIcon,
  UsersIcon,
  FileTextIcon,
  BrainIcon,
} from "lucide-react";
import CivixLogo from "@/components/civix-logo";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <CivixLogo />
              <span className="hidden font-bold sm:inline-block text-blue-500">
                Civix
              </span>
            </Link>
            
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center">
              <form action={signInAction}>
                <Button variant="ghost" className="text-blue-600 hover:text-blue-800 hover:bg-blue-100">Log In</Button>
              </form>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-red-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-9">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-800">
                  Bridging the gap between you and your government
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-600 md:text-xl">
                  Simplified policies, real impact. Understand how policies
                  affect your life with AI-generated summaries, personalized for
                  your district.
                </p>
              </div>
              <div className="flex space-x-4">
              <form action={signInAction}>
                <Button
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  Get Started Today
                </Button>
              </form>
                <Button
                  variant="outline"
                 
                  className="text-blue-600 hover:text-blue-800 border-blue-300 hover:bg-blue-100"
                >
                  <Link href="/district">
                    See What's Happening in Your District
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 md:gap-12">
              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">
                    Policies Updated Weekly
                  </CardTitle>
                  <FileTextIcon className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-800">120+</div>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-red-600">
                    States and Regions Covered
                  </CardTitle>
                  <UsersIcon className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-800">50</div>
                </CardContent>
              </Card>
              <Card className="border-blue-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-600">
                    Legislative Actions Tracked Yearly
                  </CardTitle>
                  <BarChartIcon className="h-4 w-4 text-blue-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-800">500K+</div>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-red-600">
                    Daily User Engagements
                  </CardTitle>
                  <UsersIcon className="h-4 w-4 text-red-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-red-800">200K+</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-red-50 to-blue-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Understand Policies That Matter to You
                </h2>
                <p className="max-w-[900px] text-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our AI-powered platform simplifies complex policies and
                  legislation, making it easy for you to stay informed and
                  engaged with your government.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Policy AI in action"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-red-600">
                        Personalized Summaries
                      </h3>
                      <p className="text-blue-700">
                        Get AI-generated summaries of policies tailored to your
                        district and interests.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-red-600">
                        Real-time Updates
                      </h3>
                      <p className="text-blue-700">
                        Stay informed with the latest policy changes and
                        legislative actions.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-red-600">
                        Impact Analysis
                      </h3>
                      <p className="text-blue-700">
                        Understand how new policies and laws might affect your
                        daily life.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Ready to bridge the gap?
                </h2>
                <p className="max-w-[600px] text-blue-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of citizens who are staying informed and making
                  a difference in their communities.
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  asChild
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Link href="/signup">Get Started Today</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="text-blue-600 hover:text-blue-800 border-blue-300 hover:bg-blue-100"
                >
                  <Link href="/demo">
                    Request a Demo
                    <ChevronRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-100 bg-blue-50">
        <p className="text-xs text-blue-600">
          © 2024 Civix. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-blue-600 hover:text-blue-800"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-blue-600 hover:text-blue-800"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>

      <Tasks />
    </div>
  );
}
