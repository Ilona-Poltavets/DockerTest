/** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

const nextConfig = {
    webpackDevMiddleware: config => {
      config.watchOptions = {
        poll: 1000, // Проверка изменений каждые 1000 миллисекунд
        aggregateTimeout: 300, // Задержка перед компиляцией
      };
      return config;
    },
  };
  
  export default nextConfig;