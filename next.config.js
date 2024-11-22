/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Add any external image domains if needed
    unoptimized: true, // Add this for Netlify compatibility
  },
  output: 'export', // Add this for static site generation
}

module.exports = nextConfig