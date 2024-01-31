import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";
import NewsletterCard from "./NewsletterCard";

export default function MobileNav() {
  return (
    <Sheet className=" ">
      <SheetTrigger asChild>
        <Button variant="none" className=" md:hidden flex">
          <button
            className=" md:hidden inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:R96la:"
            data-state="closed"
          >
            <svg
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
            >
              <path
                d="M3 5H11"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 12H16"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3 19H21"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span class="sr-only">Toggle Menu</span>
          </button>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Ahmed Mannai</SheetTitle>
          <SheetDescription>
            Have fun here, and don't forget to follow me on social media!
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-4" />

        <nav className="grid gap-4 py-4">
          <SheetClose asChild>
            <Link href="/">Home</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/blog">Blog</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/projects">Projects</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/aboutme">About Me</Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/contact">Contact</Link>
          </SheetClose>
        </nav>

        {/*
        <Separator className="my-4 " />
        <SheetFooter className="">
          <NewsletterCard />
        </SheetFooter>
        */}
      </SheetContent>
    </Sheet>
  );
}
