import { NextResponse, type NextRequest } from "next/server";
import {
	discoveryLinkHeader,
	homepageMarkdown,
	markdownTokenCount,
} from "./app/lib/agent-discovery";

export function proxy(request: NextRequest) {
	const isHomepage = request.nextUrl.pathname === "/";

	if (isHomepage && request.headers.get("accept")?.includes("text/markdown")) {
		return new NextResponse(homepageMarkdown, {
			headers: {
				"Content-Type": "text/markdown; charset=utf-8",
				"Content-Signal": "ai-train=no, search=yes, ai-input=no",
				Link: discoveryLinkHeader,
				Vary: "Accept",
				"x-markdown-tokens": markdownTokenCount,
			},
		});
	}

	const response = NextResponse.next();

	if (isHomepage) {
		response.headers.set("Link", discoveryLinkHeader);
	}

	return response;
}

export const config = {
	matcher: "/",
};
