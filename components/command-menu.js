"use client";
import { useState, useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  HomeIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
  ReaderIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function CommandMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    setOpen((open) => !open);
  };

  return (
    <>
      <div class="w-full flex-1 md:w-auto md:flex-none">
        <button
          onClick={searchHandler}
          type="button"
          class="inline-flex items-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        >
          <span class="hidden lg:inline-flex">Search documentation...</span>
          <span class="inline-flex lg:hidden">Search...</span>
          <kbd class="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
            <span class="text-xs">⌘</span>K
          </kbd>
        </button>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <Link href="/" onClickCapture={() => setOpen(false)}>
              <CommandItem>
                <HomeIcon className="mr-2 h-4 w-4" />
                <span>Home</span>
              </CommandItem>
            </Link>

            <Link href="/projects" onClickCapture={() => setOpen(false)}>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Projects</span>
              </CommandItem>
            </Link>

            <Link href="/blog" onClickCapture={() => setOpen(false)}>
              <CommandItem>
                <ReaderIcon className="mr-2 h-4 w-4" />
                <span>Blog</span>
              </CommandItem>
            </Link>
            <Link href="/contact" onClickCapture={() => setOpen(false)}>
              <CommandItem>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Contact</span>
              </CommandItem>
            </Link>

            <Link href="/aboutme" onClickCapture={() => setOpen(false)}>
              <CommandItem>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>About me</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Social Links">
            <CommandItem>
              <a
                href="https://www.linkedin.com/in/ahmedmannai/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </CommandItem>
            <CommandItem>
              <a
                href="https://github.com/AhmedMannai10"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </CommandItem>

            <CommandItem>
              <a
                href="https://twitter.com/Ahmed_Mannai_10"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
