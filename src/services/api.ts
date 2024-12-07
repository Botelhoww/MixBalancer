const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const api = {
  async request(
    endpoint: string,
    method: string = 'GET',
    data: any = null,
    token: string | null = localStorage.getItem('token')
  ) {
    const headers: HeadersInit = { 'Content-Type': 'application/json' };
    if (token) headers['Authorization'] = `Bearer ${token}`;

    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers,
      body: data ? JSON.stringify(data) : null,
    });

    return await response.json();
  },
};