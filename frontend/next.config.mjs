/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io", "via.placeholder.com"]
    }
    // images: {
    //     remotePatterns: [{
    //       protocol: 'https',
    //       hostname: 'cdn.sanity.io',
    //       port: '',
    //       pathname: '/assets/**'
    //     },
    //     {
    //         protocol: 'https',
    //         hostname: 'via.placeholder.com',
    //         port: '',
    //         pathname: '/assets/**'
    //       }]
    //   },
};

export default nextConfig;
