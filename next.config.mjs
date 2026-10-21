const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.everydaycodings.com",
				pathname: "/**",
			},
		],
	},
	// Disable trailing slash to match our canonical URLs
	trailingSlash: false,
};

export default nextConfig;
