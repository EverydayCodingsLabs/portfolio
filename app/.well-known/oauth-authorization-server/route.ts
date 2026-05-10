import { SITE_URL } from "../../lib/agent-discovery";

const metadata = {
	issuer: SITE_URL,
	authorization_endpoint: `${SITE_URL}/api/oauth/authorize`,
	token_endpoint: `${SITE_URL}/api/oauth/token`,
	jwks_uri: `${SITE_URL}/api/oauth/jwks`,
	response_types_supported: ["code"],
	grant_types_supported: ["authorization_code"],
	code_challenge_methods_supported: ["S256"],
	scopes_supported: ["read:profile", "read:site"],
	token_endpoint_auth_methods_supported: ["none"],
};

export function GET() {
	return Response.json(metadata);
}
