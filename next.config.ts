/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // پذیرش از هر دامنه‌ای
      },
      {
        protocol: "http",
        hostname: "**", // در صورت نیاز به پذیرش از http
      },
    ],
  },
};

export default nextConfig;
