import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const baseUrl = process.env.AGENT_READY_BASE_URL ?? "http://localhost:3000";

async function fetchLocal(path, init) {
  return fetch(new URL(path, baseUrl), init);
}

test("homepage advertises agent discovery resources with Link headers", async () => {
  const response = await fetchLocal("/");
  const link = response.headers.get("link") ?? "";

  assert.match(link, /<[/]\.well-known[/]api-catalog>;\s*rel="api-catalog"/);
  assert.match(link, /<[/]\.well-known[/]agent-skills[/]index\.json>;\s*rel="describedby"/);
  assert.match(link, /<[/]api[/]openapi\.json>;\s*rel="service-desc"/);
  assert.match(link, /<[/]api[/]docs>;\s*rel="service-doc"/);
});

test("homepage returns markdown when requested by agents", async () => {
  const response = await fetchLocal("/", {
    headers: { Accept: "text/markdown" },
  });
  const body = await response.text();

  assert.match(response.headers.get("content-type") ?? "", /text[/]markdown/);
  assert.match(response.headers.get("vary") ?? "", /accept/i);
  assert.ok(response.headers.has("x-markdown-tokens"));
  assert.match(body, /^---\ntitle: Kumar Saksham/m);
  assert.match(body, /# Kumar Saksham/);
});

test("robots.txt declares content signals", async () => {
  const response = await fetchLocal("/robots.txt");
  const body = await response.text();

  assert.match(body, /Content-Signal:\s*ai-train=no,\s*search=yes,\s*ai-input=no/);
});

test("api catalog exposes linkset json with service discovery links", async () => {
  const response = await fetchLocal("/.well-known/api-catalog");
  const body = await response.json();
  const first = body.linkset?.[0];

  assert.match(response.headers.get("content-type") ?? "", /application[/]linkset[+]json/);
  assert.ok(first.anchor);
  assert.ok(first["service-desc"]?.[0]?.href);
  assert.ok(first["service-doc"]?.[0]?.href);
  assert.ok(first.status?.[0]?.href);
});

test("oauth discovery metadata is available", async () => {
  const response = await fetchLocal("/.well-known/oauth-authorization-server");
  const body = await response.json();

  assert.equal(body.issuer, "https://everydaycodings.com");
  assert.ok(body.authorization_endpoint);
  assert.ok(body.token_endpoint);
  assert.ok(body.jwks_uri);
  assert.ok(body.grant_types_supported.includes("authorization_code"));
});

test("oauth protected resource metadata is available", async () => {
  const response = await fetchLocal("/.well-known/oauth-protected-resource");
  const body = await response.json();

  assert.equal(body.resource, "https://everydaycodings.com");
  assert.deepEqual(body.authorization_servers, ["https://everydaycodings.com"]);
  assert.ok(body.scopes_supported.includes("read:profile"));
});

test("mcp server card is available", async () => {
  const response = await fetchLocal("/.well-known/mcp/server-card.json");
  const body = await response.json();

  assert.equal(body.serverInfo.name, "everydaycodings");
  assert.ok(body.serverInfo.version);
  assert.ok(body.transport.endpoint);
  assert.equal(body.capabilities.tools.listChanged, false);
});

test("agent skills index advertises a hashed skill artifact", async () => {
  const response = await fetchLocal("/.well-known/agent-skills/index.json");
  const body = await response.json();
  const first = body.skills?.[0];

  assert.equal(body.$schema, "https://schemas.agentskills.io/discovery/0.2.0/schema.json");
  assert.equal(first.type, "skill-md");
  assert.match(first.digest, /^sha256:[a-f0-9]{64}$/);
});

test("webmcp tools are registered on page load", async () => {
  const source = await readFile("app/components/WebMCP.tsx", "utf8");

  assert.match(source, /navigator\.modelContext/);
  assert.match(source, /\.registerTool/);
  assert.match(source, /new AbortController/);
  assert.match(source, /name:\s*"navigate"/);
});
