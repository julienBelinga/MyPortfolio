/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
  experimental: {
    // appDir est maintenant activé par défaut dans Next.js 14
  },
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
  // Ajout de la configuration pour les fichiers statiques
  async rewrites() {
    return [
      {
        source: "/locales/:path*",
        destination: "/public/locales/:path*",
      },
      // Ajout d'une règle pour servir wakatime-stats.json depuis n'importe quelle locale
      {
        source: "/:locale/wakatime-stats.json",
        destination: "/wakatime-stats.json",
      },
    ];
  },
};

module.exports = nextConfig;
