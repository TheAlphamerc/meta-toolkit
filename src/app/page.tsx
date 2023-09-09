import { NavbarLayout } from "@/components/layout/appbar.layout";
import { LinkMeta, useMeta } from "@/lib/hooks/use-meta";
import { useState } from "react";
import App from "./app/page";

export default function Home() {
  return (
    <main className="">
      <NavbarLayout>
        <h3 className="text-2xl font-semibold tracking-tight text-gray-700">
          Meta Toolkit
        </h3>
      </NavbarLayout>
      <App />
    </main>
  );
}
