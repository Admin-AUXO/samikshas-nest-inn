import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://samikshasnestinn.in',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  image: { responsiveStyles: true }
});
