const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export const api = {
  base: BASE_URL,
  async get(path, params = {}) {
    const url = new URL(path.startsWith('http') ? path : `${BASE_URL}${path}`)
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') url.searchParams.append(k, v)
    })
    const res = await fetch(url.toString())
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return res.json()
  },
  async post(path, body) {
    const res = await fetch(`${BASE_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body || {})
    })
    if (!res.ok) throw new Error(`Request failed: ${res.status}`)
    return res.json()
  }
}

export default api
