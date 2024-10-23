"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Tasks from "./components/civix/task";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Civix</h1>
      <Tasks />
    </main>
  );
}
