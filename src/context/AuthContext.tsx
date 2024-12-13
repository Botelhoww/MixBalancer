'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { authService } from '@/services/authService'; // We'll modify this service

// Define a more specific User interface
interface User {
  id: string;
  name: string;
  email: string;
  // Add any other user properties you want to store
}

interface AuthContextProps {
  user: User | null;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = async (newToken: string) => {
    // Store the token
    setToken(newToken);
    localStorage.setItem('token', newToken);

    try {
      // Fetch user details using the token
      const userData = await authService.getCurrentUser();
      if (userData.success) {
        setUser(userData.user);
      } else {
        // Handle error in fetching user data
        logout();
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      logout();
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      login(storedToken).catch(console.error);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};