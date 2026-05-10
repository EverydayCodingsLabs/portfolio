import { API_ANCHOR, SITE_URL } from "../../lib/agent-discovery";

export function GET() {
	return Response.json(
		{
			linkset: [
				{
					anchor: API_ANCHOR,
					"service-desc": [
						{
							href: `${SITE_URL}/api/openapi.json`,
							type: "application/vnd.oai.openapi+json",
						},
					],
					"service-doc": [
						{
							href: `${SITE_URL}/api/docs`,
							type: "text/html",
						},
					],
					status: [
						{
							href: `${SITE_URL}/api/status`,
							type: "application/json",
						},
					],
				},
			],
		},
		{
			headers: {
				"Content-Type": "application/linkset+json; charset=utf-8",
			},
		},
	);
}
