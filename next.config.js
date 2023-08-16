// /** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // distDir: 'build',
  images:{
    domains:["https://reseller.ezrankings.in//"]
    // unoptimized:true
  },
  env: {
    API_BASE_URL: 'https://reseller.ezrankings.in/dashboard/',
  }
};

// module.exports = nextConfig
