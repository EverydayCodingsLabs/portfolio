import { SITE_URL } from "../../lib/agent-discovery";

export function GET() {
	return Response.json({
		issuer: SITE_URL,
		authorization_endpoint: `${SITE_URL}/api/oauth/authorize`,
		token_endpoint: `${SITE_URL}/api/oauth/token`,
		jwks_uri: `${SITE_URL}/api/oauth/jwks`,
		response_types_supported: ["code"],
		grant_types_supported: ["authorization_code"],
		subject_types_supported: ["public"],
		id_token_signing_alg_values_supported: ["RS256"],
		scopes_supported: ["openid", "profile", "read:profile", "read:site"],
		code_challenge_methods_supported: ["S256"],
	});
}
