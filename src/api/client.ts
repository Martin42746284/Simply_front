const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000';

type FetchOptions = RequestInit & { authenticate?: boolean };

export async function apiFetch(path: string, options: FetchOptions = {}) {
  const url = API_BASE.replace(/\/$/, '') + path;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> || {}),
  };

  if (options.authenticate !== false) {
    const token = localStorage.getItem('token');
    if (token) headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, { ...options, headers });

  if (!res.ok) {
    const text = await res.text();
    let body: any;
    try { body = JSON.parse(text); } catch { body = { message: text }; }
    const err = new Error(body.error || body.message || res.statusText);
    // attach status for callers
    (err as any).status = res.status;
    (err as any).body = body;
    throw err;
  }

  // try parse json
  const content = await res.text();
  try {
    return JSON.parse(content);
  } catch {
    return content;
  }
}

export async function post(path: string, body: any, opts: RequestInit = {}) {
  return apiFetch(path, { method: 'POST', body: JSON.stringify(body), ...opts });
}

export async function get(path: string, opts: RequestInit = {}) {
  return apiFetch(path, { method: 'GET', ...opts });
}

export default { apiFetch, post, get };
