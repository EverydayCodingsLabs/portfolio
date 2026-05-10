export function POST() {
	return Response.json(
		{
			error: "temporarily_unavailable",
			error_description:
				"This portfolio publishes discovery metadata only and does not currently issue user tokens.",
		},
		{ status: 501 },
	);
}
