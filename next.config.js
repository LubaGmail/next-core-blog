/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    env: {
      mongodb_username: 'm220student',
      mongodb_password: 'perchik',
      mongodb_clustername: 'cluster0',
  }
}

module.exports = nextConfig
