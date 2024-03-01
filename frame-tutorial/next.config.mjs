/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/nativemuseum',
                destination: 'https://frame-tutorial-seven.vercel.app/',
                permanent: false
            },
            {
                source: '/pinatacloud',
                destination: 'https://pinata.cloud/blog',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
