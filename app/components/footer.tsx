import { config } from "../config/config";

export default function Footer() {
  return (
    <footer className="rule-t no-print flex flex-wrap items-center justify-between gap-2 px-5 py-6 text-xs text-neutral-500 sm:px-6 dark:text-neutral-400">
      <p>
        © {new Date().getFullYear()} {config.profile.name}
      </p>
      <p>Shipped from Sahibganj, one commit at a time</p>
    </footer>
  );
}
