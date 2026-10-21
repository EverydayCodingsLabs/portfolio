"use client";
import GitHubCalendar from "react-github-calendar";
import { useDark } from "./theme-toggle";

// The calendar only reads the OS theme on its own, so pass the site's.
export default function GitHubActivity({ username }: { username: string }) {
  return (
    <GitHubCalendar
      username={username}
      colorScheme={useDark() ? "dark" : "light"}
      fontSize={12}
      blockSize={10}
    />
  );
}
