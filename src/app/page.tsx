import { Button } from "@tasks/components/ui/button";
import Link from "next/link";
import { TiTickOutline } from "react-icons/ti";

export default function Home() {
  return (
    <div>
      <div className="flex w-full min-h-16 items-center justify-center border-b">
        <div className="container flex w-full h-full gap-2.5 px-2.5 items-center justify-between">
          <div className="flex gap-2 items-center">
            <div className="flex p-1 rounded-lg bg-primary">
              <TiTickOutline className="size-5 text-primary-foreground" />
            </div>
            <span className="font-extrabold text-primary">Tasks</span>
          </div>

          <div className="flex gap-2">
            <Link href="/signin">
              <Button variant="link" className="text-foreground">
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button>Get started</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
