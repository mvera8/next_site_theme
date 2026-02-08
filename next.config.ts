// next.config.js
import path from 'path';

const isPages = process.env.PAGES_GITHUB === 'true';

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  output: 'export',                                    // GitHub Pages
  basePath: isPages ? '/next_site_theme' : '',     // GitHub Pages
  assetPrefix: isPages ? '/next_site_theme/' : '', // GitHub Pages
  images: {                                            // GitHub Pages
    unoptimized: true,                                 // GitHub Pages
  },                                                   // GitHub Pages
};

export default nextConfig;
