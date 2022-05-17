/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	SERVER_URL: "https://fakestoreapi.com",
	env: {},
	async redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
