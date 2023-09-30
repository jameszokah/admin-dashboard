/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['https://img.clerk.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'img.clerk.com',
              port: '',
            //   pathname: '/account123/**',
            },
          ],
    }
}

module.exports = nextConfig
