import { NavbarLayout } from "@/components/layout/appbar.layout";
import Image from "next/image";
import Link from "next/link";
import App from "./app/page";

export default function Home() {
  return (
    <main className="">
      <NavbarLayout>
        <Link className="flex items-center gap-2" href={"/"}>
          <Image src="/assets/logo.png" alt="logo" width={30} height={30} />
          <h3 className="text-2xl font-semibold tracking-tight ">
            Meta Toolkit
          </h3>
        </Link>
      </NavbarLayout>
      <App />
    </main>
  );
}
