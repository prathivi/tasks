"use client";

import { Aside } from "@tasks/components/common/aside";
import { Header } from "@tasks/components/common/header";
import { useState } from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [asideOpen, setAsideOpen] = useState(true);

  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <Header asideOpen={asideOpen} setAsideOpen={setAsideOpen} />
      <div className="flex w-full h-full overflow-hidden">
        <Aside asideOpen={asideOpen} />
        <main>{children}</main>
      </div>
    </div>
  );
}
