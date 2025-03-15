/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Задайте имя вашего репозитория, если он не в корне домена
  basePath: process.env.NODE_ENV === 'production' ? '/bio-page' : '',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 