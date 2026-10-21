"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="-mt-8">
      <header className="rule-b py-10">
        <h1 className="text-balance text-[1.7rem] leading-tight font-light tracking-tight sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-2 max-w-[60ch] leading-relaxed text-neutral-600 dark:text-neutral-400">
          This page failed to load. Try again, and if it keeps happening,
          reload the site.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex h-9 items-center rounded-lg border border-[var(--line)] px-3 text-sm shadow-[0_1px_2px_rgb(0_0_0/0.04)] transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900"
        >
          Try again
        </button>
      </header>
    </div>
  );
}
