/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  async rewrites() {
    return [{ source: '/bKash/auth', destination: '/api/bKash/auth' }]
  },
  // basePath: '/auth', // set your desired API path here
}

module.exports = nextConfig
