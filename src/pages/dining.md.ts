import type { APIRoute } from 'astro';
import { diningMd } from '../lib/markdown';

export const GET: APIRoute = () =>
  new Response(diningMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
