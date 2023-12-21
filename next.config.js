/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["firebasestorage.googleapis.com"]
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true, // set to false if the redirect is temporary
          },
        ]
      }
}

module.exports = nextConfig
