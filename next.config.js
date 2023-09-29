/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});
const hostnames = [
  {
    hostname: 'lh3.googleusercontent.com',
    pathname: '/a/**'
  },
  {
    hostname: 'avatars.githubusercontent.com',
    pathname: '/**'
  },
  {
    hostname: 'images.unsplash.com',
    pathname: '/**'
  },
  {
    hostname: 'tailwindui.com',
    pathname: '/**'
  }
]

const nextConfig = withPWA({
  eslint: {
    dirs: ['app'],
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: hostnames.map(({ hostname, pathname }) => ({
      protocol: 'https',
      hostname,
      pathname
    }))}

});
module.exports = nextConfig;






