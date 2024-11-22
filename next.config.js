/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'custom',
    loaderFile: './imageLoader.js',
    unoptimized: true
  }
}

module.exports = nextConfig