import type { APIRoute } from 'astro';
import { abs, noindex } from '../lib/markdown';

export const GET: APIRoute = () =>
  new Response(
    noindex
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap-index.xml')}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } }
  );
