import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
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
