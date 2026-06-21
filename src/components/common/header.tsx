"use client";

import { UserButton } from "@clerk/nextjs";
import { Button } from "@tasks/components/ui/button";
import { MdMenu } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { ThemeButton } from "./theme.button";

export function Header({
  asideOpen,
  setAsideOpen,
}: {
  asideOpen: boolean;
  setAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="flex w-full min-h-14 gap-2.5 px-2.5 items-center justify-between border-b bg-background">
      <div className="flex gap-2 items-center">
        <Button
          variant="ghost"
          className="size-10 m-1 rounded-full"
          onClick={() => {
            setAsideOpen(!asideOpen);
          }}
        >
          <MdMenu className="size-5" />
        </Button>
        <div className="flex gap-2 items-center">
          <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
            <TiTick className="size-5 scale-110 text-primary-foreground" />
          </div>
          <span className="text-lg font-extrabold text-primary">Tasks</span>
        </div>
      </div>

      <div className="flex gap-5 pr-2.5 items-center">
        <Button size="sm">Create Tasks</Button>
        <div className="flex gap-3 items-center">
          <div className="flex gap-1 items-center">
            <ThemeButton />
          </div>
          <UserButton />
        </div>
      </div>
    </div>
  );
}
