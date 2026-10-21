"use client";

import { CircleHalf, X } from "@phosphor-icons/react";
import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { play } from "./sound";

// The switch button cycles through these; one image hides it.
const avatars = ["/avatar.webp", "/avatar-dots.webp"];
const GLITCH_MS = 520;

export default function Profile({
  name,
  children,
}: {
  name: string;
  children: ReactNode;
}) {
  const [index, setIndex] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  function toggle() {
    if (glitching) return;
    setGlitching(true);
    play("glitch");
    navigator.vibrate?.(35);
    // swap mid-glitch so the cut hides the change
    setTimeout(() => setIndex((i) => (i + 1) % avatars.length), GLITCH_MS / 2);
    setTimeout(() => setGlitching(false), GLITCH_MS);
  }

  return (
    <div className="flex items-center gap-5 py-6">
      <button
        type="button"
        onClick={() => {
          play("click");
          dialog.current?.showModal();
        }}
        aria-label={`View ${name}'s avatar`}
        data-glitching={glitching}
        className="avatar-glitch relative size-24 shrink-0 cursor-zoom-in rounded-xl border border-[var(--line)] bg-neutral-50 p-1 sm:size-32 dark:bg-neutral-900"
      >
        <span className="avatar-glitch__img relative block size-full overflow-hidden rounded-lg">
          {avatars.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              sizes="128px"
              priority={i === 0}
              className={`select-none object-cover ${i === index ? "" : "opacity-0"}`}
            />
          ))}
        </span>
        <span aria-hidden="true" className="avatar-glitch__scan" />
        <span aria-hidden="true" className="avatar-glitch__rgb" />
      </button>

      <div className="min-w-0">
        {avatars.length > 1 && (
          <button
            type="button"
            onClick={toggle}
            aria-label="Switch avatar"
            title="Switch avatar"
            className="-ml-1.5 inline-flex size-8 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <CircleHalf size={16} weight="bold" />
          </button>
        )}
        {children}
      </div>

      <dialog
        ref={dialog}
        onClick={(e) => e.target === e.currentTarget && e.currentTarget.close()}
        className="avatar-dialog overflow-hidden rounded-2xl bg-white p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm dark:bg-neutral-900"
      >
        <Image
          src={avatars[index]}
          alt={`${name}'s avatar`}
          width={384}
          height={384}
          className="block size-[min(24rem,80vw)] object-cover"
        />
        <form method="dialog">
          <button
            type="submit"
            aria-label="Close"
            className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-black/45 text-white transition-colors hover:bg-black/65"
          >
            <X size={18} weight="bold" />
          </button>
        </form>
      </dialog>
    </div>
  );
}

// Cycles through roles with a blur fade; shows the first one with reduced motion.
export function Roles({ items }: { items: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 3000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <span key={index} className="role-in inline-block">
      {items[index]}
    </span>
  );
}
