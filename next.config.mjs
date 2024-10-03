/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/api/v1/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/:path*`,
    },
  ],
};

export default nextConfig;
