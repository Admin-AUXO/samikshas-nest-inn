const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);

export const stripBase = (path: string) => (base && path.startsWith(base) ? path.slice(base.length) || '/' : path);
