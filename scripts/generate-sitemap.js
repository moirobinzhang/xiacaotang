
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://www.xiacaotang.com';
const PUBLIC_DIR = path.join(__dirname, '../public');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

const routes = [
    { path: '/', priority: '1.0' },
    { path: '/about', priority: '0.8' },
    { path: '/services', priority: '0.9' },
    { path: '/services/acupuncture', priority: '0.8' },
    { path: '/services/herbology', priority: '0.8' },
    { path: '/services/massage', priority: '0.8' },
    { path: '/services/hearing-aid', priority: '0.8' },
    { path: '/contact', priority: '0.8' },
    { path: '/testimonials', priority: '0.7' }
];

const generateSitemap = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route.path === '/' ? '' : route.path}</loc>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`Sitemap generated at ${SITEMAP_PATH}`);
};

generateSitemap();
