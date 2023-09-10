import { NavbarLayout } from "@/components/layout/appbar.layout";
import App from "./app/page";

export default function Home() {
  return (
    <main className="">
      <NavbarLayout>
        <h3 className="text-2xl font-semibold tracking-tight text-primary">
          Meta Toolkit
        </h3>
      </NavbarLayout>
      <App />
    </main>
  );
}
