"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { config } from "../config/config";
import ISTClock from "./ist-clock";
import { play } from "./sound";

// react-cmdk only listens for the shortcut, so the button sends it.
function openPalette() {
  play("click");
  document.dispatchEvent(
    new KeyboardEvent("keydown", { key: "k", metaKey: true, ctrlKey: true }),
  );
}

export function Navbar() {
  const currentRoute = usePathname();

  return (
    <header className="rule-b no-print sticky top-0 z-10 bg-white/85 dark:bg-[#111010]/85 backdrop-blur-md">
      <nav className="flex h-14 items-center gap-2 px-5 sm:px-6" id="nav">
        <Link
          href="/"
          aria-label="Home"
          className="mr-auto font-mono text-lg font-bold tracking-tighter"
        >
          KS
        </Link>
        <div className="flex items-center">
          {config.navigation.map(({ path, name }) => (
            <Link
              key={path}
              href={path}
              aria-current={currentRoute === path ? "page" : undefined}
              className="px-1.5 py-1 text-sm sm:px-2 text-neutral-500 transition-colors hover:text-neutral-900 aria-[current=page]:text-neutral-900  dark:text-neutral-400 dark:hover:text-neutral-100 dark:aria-[current=page]:text-neutral-100"
            >
              {name}
            </Link>
          ))}
        </div>
        <button
          type="button"
          onClick={openPalette}
          aria-label="Search pages"
          className="ml-1 inline-flex h-8 items-center gap-2 rounded-full border border-[var(--line)] px-3 text-sm text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        >
          <MagnifyingGlass size={15} weight="bold" />
          <kbd className="hidden font-sans text-xs sm:inline">⌘K</kbd>
        </button>
        <div className="hidden md:block">
          <ISTClock />
        </div>
      </nav>
    </header>
  );
}
