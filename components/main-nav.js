"use client";
import Link from "next/link";

import { cn } from "@/lib/utils";

export default function MainNav({ className, ...props }) {
  return (
    <nav
      className={cn("flex items-center  space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className=" mr-6 text-lg transition-colors hover:text-primary hidden font-bold sm:inline-block"
      >
        Ahmed Mannai
      </Link>
      <Link
        href="/blog"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Blog
      </Link>
      <Link
        href="/projects"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Projects
      </Link>
      <Link
        href="/aboutme"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        About Me
      </Link>
      <Link
        href="/contact"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Contact
      </Link>
    </nav>
  );
}
