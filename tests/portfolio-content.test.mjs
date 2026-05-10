import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("LokKatha is represented consistently across config, homepage, and resume", async () => {
  const [configSource, homeSource, resumeSource] = await Promise.all([
    readFile("app/config/config.ts", "utf8"),
    readFile("app/page.tsx", "utf8"),
    readFile("app/resume/page.tsx", "utf8"),
  ]);

  assert.match(configSource, /lokKatha:\s*"https:\/\/lokkatha\.xyz"/);
  assert.doesNotMatch(homeSource, /href="https:\/\/lokkatha\.xyz"/);
  assert.match(homeSource, /name:\s*"LokKatha"/);
  assert.match(homeSource, /url:\s*config\.companies\.lokKatha/);

  assert.match(resumeSource, /company:\s*"LokKatha"/);
  assert.match(resumeSource, /role:\s*"Founder & Builder"/);
  assert.match(resumeSource, /period:\s*"2025 - Present"/);
  assert.match(resumeSource, /workType:\s*"Personal"/);
  assert.match(resumeSource, /website:\s*config\.companies\.lokKatha/);
  assert.match(resumeSource, /"Next\.js"/);
  assert.match(resumeSource, /"Supabase"/);
  assert.match(resumeSource, /searchable folklore archive/);
});
