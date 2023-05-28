/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/posts',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/posts/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
  // experimental: {
  //   appDir: true,
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  },
  images: {
    domains: ['cdn.sanity.io'],
  },

}

module.exports = nextConfig
