export function GET() {
	return Response.json({
		message:
			"This site exposes WebMCP browser tools on page load. Use /.well-known/mcp/server-card.json for discovery metadata.",
	});
}
