"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { play } from "./sound";

// Follows the OS by default. A click overrides it; picking the OS theme again
// clears the override so it goes back to following the system.
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const next = !dark;
    const system = matchMedia("(prefers-color-scheme: dark)").matches;
    const apply = () => {
      try {
        if (next === system) localStorage.removeItem("theme");
        else localStorage.theme = next ? "dark" : "light";
      } catch {}
      (window as any).__applyTheme?.();
    };
    play(next ? "dark" : "light");

    // Not in this TypeScript version's DOM types yet.
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> };
    };
    if (
      !doc.startViewTransition ||
      matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      apply();
      return;
    }

    // Grow the new theme as a circle from the button out to the farthest corner.
    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const r = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    );
    doc.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${r}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 550,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  const Icon = dark ? Sun : Moon;
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      <Icon size={15} weight="bold" />
    </button>
  );
}
