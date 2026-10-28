import type { APIRoute } from 'astro';
import { llmsFull } from '../lib/markdown';

export const GET: APIRoute = () =>
  new Response(llmsFull(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
