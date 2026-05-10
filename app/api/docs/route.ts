import { SITE_URL } from "../../lib/agent-discovery";

export function GET() {
	const body = `<!doctype html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Everydaycodings Agent Discovery API</title>
		<meta name="description" content="Documentation for agent discovery endpoints on everydaycodings.com." />
	</head>
	<body>
		<main>
			<h1>Everydaycodings Agent Discovery API</h1>
			<p>This site exposes static discovery metadata for agents.</p>
			<ul>
				<li><a href="/.well-known/api-catalog">API catalog</a></li>
				<li><a href="/api/openapi.json">OpenAPI description</a></li>
				<li><a href="/.well-known/agent-skills/index.json">Agent skills index</a></li>
				<li><a href="/api/status">Status</a></li>
			</ul>
		</main>
	</body>
</html>`;

	return new Response(body, {
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			Link: `<${SITE_URL}/api/openapi.json>; rel="service-desc"; type="application/vnd.oai.openapi+json"`,
		},
	});
}
