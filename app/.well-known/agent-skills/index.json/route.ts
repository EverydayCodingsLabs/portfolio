import { createHash } from "node:crypto";
import { SITE_URL, portfolioSkillMarkdown } from "../../../lib/agent-discovery";

export function GET() {
	const digest = createHash("sha256")
		.update(portfolioSkillMarkdown)
		.digest("hex");

	return Response.json({
		$schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
		skills: [
			{
				name: "everydaycodings-site-discovery",
				type: "skill-md",
				description:
					"Discover Kumar Saksham's portfolio, projects, resume, contact links, and agent-readable metadata.",
				url: `${SITE_URL}/.well-known/agent-skills/everydaycodings-site-discovery/SKILL.md`,
				digest: `sha256:${digest}`,
			},
		],
	});
}
