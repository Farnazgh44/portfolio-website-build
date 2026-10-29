/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Pictures are resized for each visitor's screen and served as light WebP files.
    // Keep those resized copies cached for a year.
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig
