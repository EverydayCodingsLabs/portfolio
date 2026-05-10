import { SITE_URL } from "../../lib/agent-discovery";

export function GET() {
	return Response.json(
		{
			openapi: "3.1.0",
			info: {
				title: "Everydaycodings Agent Discovery API",
				version: "1.0.0",
				description:
					"Machine-readable discovery endpoints for Kumar Saksham's portfolio.",
			},
			servers: [{ url: SITE_URL }],
			paths: {
				"/.well-known/api-catalog": {
					get: {
						summary: "API catalog",
						responses: {
							"200": {
								description: "RFC 9727 API catalog as linkset JSON",
							},
						},
					},
				},
				"/.well-known/agent-skills/index.json": {
					get: {
						summary: "Agent skills index",
						responses: {
							"200": {
								description: "Agent Skills Discovery index",
							},
						},
					},
				},
				"/api/status": {
					get: {
						summary: "Health status",
						responses: {
							"200": {
								description: "Basic health response",
							},
						},
					},
				},
			},
		},
		{
			headers: {
				"Content-Type": "application/vnd.oai.openapi+json; charset=utf-8",
			},
		},
	);
}
