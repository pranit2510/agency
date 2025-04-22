/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'], // Add any other image domains you're using
  },
  // Enable static exports if needed
  // output: 'export',
}

module.exports = nextConfig 