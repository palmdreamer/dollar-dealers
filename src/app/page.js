import Image from "next/image";

import Tiers from "./components/tiers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Tiers />
    </main>
  );
}
