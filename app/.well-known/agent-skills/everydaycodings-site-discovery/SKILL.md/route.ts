import { portfolioSkillMarkdown } from "../../../../lib/agent-discovery";

export function GET() {
	return new Response(portfolioSkillMarkdown, {
		headers: {
			"Content-Type": "text/markdown; charset=utf-8",
		},
	});
}
