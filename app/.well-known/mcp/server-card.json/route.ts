import { SITE_URL } from "../../../lib/agent-discovery";

export function GET() {
	return Response.json({
		serverInfo: {
			name: "everydaycodings",
			title: "Everydaycodings Portfolio",
			version: "1.0.0",
		},
		transport: {
			type: "webmcp",
			endpoint: `${SITE_URL}/mcp`,
		},
		capabilities: {
			tools: {
				listChanged: false,
			},
			resources: {
				subscribe: false,
				listChanged: false,
			},
			prompts: {
				listChanged: false,
			},
		},
	});
}
