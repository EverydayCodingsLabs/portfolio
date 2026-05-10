"use client";

import { useEffect } from "react";
import { config } from "../config/config";

type ToolInput = Record<string, unknown>;

type WebMcpTool = {
	name: string;
	title?: string;
	description: string;
	inputSchema: Record<string, unknown>;
	annotations?: {
		readOnlyHint?: boolean;
		untrustedContentHint?: boolean;
	};
	execute: (input: ToolInput) => Promise<unknown> | unknown;
};

type ModelContext = {
	registerTool?: (
		tool: WebMcpTool,
		options?: { signal?: AbortSignal },
	) => void;
	provideContext?: (context: { tools: WebMcpTool[] }) => void;
};

declare global {
	interface Navigator {
		modelContext?: ModelContext;
	}
}

const routes = [
	"/",
	"/projects",
	"/resume",
	"/contact",
	"/blog",
	"/community",
] as const;

function isRoute(path: string): path is (typeof routes)[number] {
	return routes.some((route) => route === path);
}

function buildTools(): WebMcpTool[] {
	return [
		{
			name: "navigate",
			title: "Navigate",
			description: "Navigate to a public page on everydaycodings.com.",
			inputSchema: {
				type: "object",
				properties: {
					path: {
						type: "string",
						enum: routes,
						description: "The site path to open.",
					},
				},
				required: ["path"],
				additionalProperties: false,
			},
			annotations: { readOnlyHint: true },
			execute: ({ path }) => {
				if (typeof path !== "string" || !isRoute(path)) {
					throw new Error("Unsupported route");
				}

				window.location.href = path;
				return { navigatedTo: path };
			},
		},
		{
			name: "get_contact_links",
			title: "Get Contact Links",
			description: "Return Kumar Saksham's public contact and social links.",
			inputSchema: {
				type: "object",
				properties: {},
				additionalProperties: false,
			},
			annotations: { readOnlyHint: true },
			execute: () => ({
				email: config.socials.email,
				github: config.socials.github,
				x: config.socials.twitter,
				linkedin: config.socials.linkedin,
			}),
		},
		{
			name: "get_site_summary",
			title: "Get Site Summary",
			description: "Return a concise summary of the portfolio website.",
			inputSchema: {
				type: "object",
				properties: {},
				additionalProperties: false,
			},
			annotations: { readOnlyHint: true },
			execute: () => ({
				name: config.profile.name,
				role: "AI-focused backend engineer and full-stack web developer",
				homepage: "https://everydaycodings.com/",
				projects: "https://everydaycodings.com/projects",
				resume: "https://everydaycodings.com/resume",
			}),
		},
	];
}

export default function WebMCP() {
	useEffect(() => {
		const modelContext = navigator.modelContext;

		if (!modelContext) {
			return;
		}

		const tools = buildTools();
		const controller = new AbortController();

		if (modelContext.registerTool) {
			for (const tool of tools) {
				modelContext.registerTool(tool, { signal: controller.signal });
			}
		} else if (modelContext.provideContext) {
			modelContext.provideContext({ tools });
		}

		return () => {
			controller.abort();
		};
	}, []);

	return null;
}
