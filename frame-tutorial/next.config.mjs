/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/nativemuseum',
                destination: 'https://vercel.com/k1nghandy/frame-tutorial/Ezh7EJDnigHsvSSELvCmNxPe6zAA',
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
