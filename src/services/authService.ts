// src/services/authService.ts
import api from './api';

interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export const authService = {
  login: async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await api.post<LoginResponse>('/auth/login', { email, password });
      return {
        success: true,
        token: response.data.token,
        user: response.data.user
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Falha no login'
      };
    }
  },

  getCurrentUser: async (token: string) => {
    try {
      const response = await api.get('/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      });

      return response.data.user;
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'Não foi possível carregar as informações do usuário'
      };
    }
  },

  register: async (data: { username: string; email: string; password: string }) => {
    try {
      const response = await api.post<LoginResponse>(`/auth/register`, data);
      return {
        success: true,
        token: response.data.token,
        user: response.data.user
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || 'An error occurred while registering.'
      };
    }
  }
};