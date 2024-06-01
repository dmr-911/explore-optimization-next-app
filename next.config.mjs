/** @type {import('next').NextConfig} */
const nextConfig = {
  //   images: ["res.cloudinary.com"],
  images: {
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
