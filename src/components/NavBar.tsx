// src/components/NavBar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { Button } from './ui/button';

const NavBar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const colorPalette = {
    primary: "#1D3557", // Azul profundo
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <img 
            src="/mixbalancer.png" 
            alt="MixBalancer Logo" 
            className="w-10 h-10 rounded-full"
          />
          <Link href="/">
            <h2 className="text-2xl font-bold text-gray-800">MixBalancer</h2>
          </Link>          
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              <span className="text-gray-800">{user?.name}</span>
              <Button 
                variant="outline" 
                className="text-gray-700 border-gray-300 hover:bg-gray-100"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="outline" className="text-gray-700 border-gray-300 hover:bg-gray-100">
                  Login
                </Button>
              </Link>
              <Link href='/auth/register'>
                <Button 
                  style={{
                    backgroundColor: colorPalette.primary,
                    color: 'white'
                  }}
                >
                  Cadastrar
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;