import type { APIRoute } from 'astro';
import { exploreMd } from '../lib/markdown';

export const GET: APIRoute = () =>
  new Response(exploreMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
