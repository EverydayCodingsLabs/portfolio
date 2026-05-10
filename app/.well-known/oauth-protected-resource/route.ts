import { SITE_URL } from "../../lib/agent-discovery";

export function GET() {
	return Response.json({
		resource: SITE_URL,
		authorization_servers: [SITE_URL],
		scopes_supported: ["read:profile", "read:site"],
		bearer_methods_supported: ["header"],
		resource_documentation: `${SITE_URL}/api/docs`,
	});
}
