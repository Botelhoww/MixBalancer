const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
  async login(data: { email: string; password: string }) {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      return response.ok
        ? { success: true, token: result }
        : { success: false, message: result.message };
    } catch (error) {
      return { success: false, message: 'An error occurred while logging in.' };
    }
  },

  async register(data: { username: string; email: string; password: string }) {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return response.ok
        ? { success: true }
        : { success: false, message: result.message };
    } catch (error) {
      return { success: false, message: 'An error occurred while registering.' };
    }
  },
};