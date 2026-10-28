import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://samikshasnestinn.in',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  image: { responsiveStyles: true },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })]
});
