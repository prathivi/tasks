"use client";

import { cn } from "@tasks/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { IconType } from "react-icons";
import { MdStarOutline, MdTaskAlt } from "react-icons/md";

type TTab = {
  label: string;
  href: string;
  icon: IconType;
};

export function Aside({ asideOpen }: Readonly<{ asideOpen: boolean }>) {
  const pathname = usePathname();

  const tabs: TTab[] = [
    {
      label: "Tasks",
      href: "/tasks",
      icon: MdTaskAlt,
    },
    {
      label: "Starred",
      href: "/starred",
      icon: MdStarOutline,
    },
  ];

  return (
    <div
      className={cn(
        "transition-all ease-in-out flex flex-col min-w-72  h-full gap-3 py-2 overflow-hidden",
        asideOpen ? "ml-0" : "-ml-72",
      )}
    >
      <ul className="flex flex-col gap-0.5">
        {tabs.map((tab) => {
          return (
            <li key={tab.label}>
              <Link
                href={tab.href}
                className={cn(
                  "flex w-full min-h-12 gap-6 pl-6 items-center rounded-r-full hover:bg-muted-foreground/15",
                  pathname.startsWith(tab.href) &&
                    "bg-primary/25 hover:bg-primary/25",
                )}
              >
                <tab.icon className="size-6" />
                <span className="text-sm font-medium">{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
