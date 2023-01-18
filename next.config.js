/** @type {import('next').NextConfig} */

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,

})


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
 
  "baseUrl": ".",
  "@/components/*" : ["components/*"],
  "@/lib/*" : ["lib/*"],
  "@/utils/*" : ["utils/*"],


}


module.exports = withMDX(nextConfig)
nextConfig
