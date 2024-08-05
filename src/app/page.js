import Image from "next/image";

import Tiers from "./components/tiers";

import Navigation from "./components/navigation";
import Footer from "./components/footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navigation />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Tiers />
      </main>
      <Footer />
    </Fragment>
  );
}
