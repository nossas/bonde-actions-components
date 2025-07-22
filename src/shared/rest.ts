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
  const res = await fetch(url, {
    method: 'GET',
  })
  return handleResponse<Ret>(res)
}

export async function POST<Ret, Body = unknown>(url: URL, body: Body): Promise<Ret> {
  const res = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return handleResponse<Ret>(res)
}
