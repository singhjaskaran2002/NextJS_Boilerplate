/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: "http://0.0.0.0:8000",
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/login",
				permanent: false,
			},
		];
	},
	experimental: {
		outputStandalone: true,
	},
};

module.exports = nextConfig;
