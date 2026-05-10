import { SITE_URL } from "../lib/agent-discovery";

export function GET() {
	const body = [
		"User-agent: *",
		"Allow: /",
		"Disallow: /api/",
		"Content-Signal: ai-train=no, search=yes, ai-input=no",
		"",
		"User-agent: Googlebot",
		"Allow: /",
		"Crawl-delay: 0",
		"",
		`Sitemap: ${SITE_URL}/sitemap.xml`,
		`Host: ${SITE_URL}`,
		"",
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
