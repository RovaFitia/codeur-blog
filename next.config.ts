import { build } from 'velite';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer, dev }) => {
    // Ajouter Velite uniquement en production
    if (!dev) {
      config.plugins.push(new VeliteWebpackPlugin());
    }
    return config;
  },
};

class VeliteWebpackPlugin {
  static started = false;

  apply(compiler: any) {
    compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === 'development';
      await build({ watch: dev, clean: !dev });
    });
  }
}

export default nextConfig;
