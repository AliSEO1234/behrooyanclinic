import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, proxy-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azpo.com",
        port: "",
        pathname: "**/**/**",
      },
      {
        protocol: "https",
        hostname: "azpohealth.com",
        port: "",
        pathname: "**/**/**",
      },
      {
        protocol: "https",
        pathname: "**/**/**",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
