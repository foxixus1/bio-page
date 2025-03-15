/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Укажите точное имя репозитория
  basePath: '/bio-page',
  images: {
    unoptimized: true,
  },
  // Необходимо для правильной работы статических файлов
  assetPrefix: '/bio-page/',
}

module.exports = nextConfig 