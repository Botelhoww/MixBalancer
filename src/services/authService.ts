const API_URL = process.env.NEXT_PUBLIC_API_URL;

// src/services/authService.ts
import axios from 'axios'; // Assuming you're using axios

export const authService = {
  login: async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      return {
        success: true,
        token: response.data.token
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Falha no login'
      };
    }
  },

  getCurrentUser: async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`${API_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return {
        success: true,
        user: response.data.user
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Não foi possível carregar as informações do usuário'
      };
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
  }
};