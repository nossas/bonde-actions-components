async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json()
  if (response.ok) {
    return data as T
  }
  else {
    console.error(data)
    throw new Error(data.detail)
  }
}

export async function GET<Ret, Params extends Record<string, unknown> = Record<string, unknown>>(url: URL, params: Params): Promise<Ret> {
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, String(value))
  }
  const headers: HeadersInit = {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache',
  }
  if (url.host.includes('ngrok')) {
    headers['ngrok-skip-browser-warning'] = '1'
  }
  const res = await fetch(url, {
    method: 'GET',
    headers,
  })
  return handleResponse<Ret>(res)
}

export async function POST<Ret, Body = unknown>(url: URL, body: Body): Promise<Ret> {
  const headers: HeadersInit = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  const res = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  return handleResponse<Ret>(res)
}
