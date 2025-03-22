import { useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
}

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Verify token with backend
      fetch('/api/auth/verify', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          setState({ user: data.user, loading: false });
        } else {
          localStorage.removeItem('token');
          setState({ user: null, loading: false });
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        setState({ user: null, loading: false });
      });
    } else {
      setState({ user: null, loading: false });
    }
  }, []);

  return state;
}

export async function login(email: string, password: string): Promise<User> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to login');
  }

  localStorage.setItem('token', data.token);
  return data.user;
}

export async function register(name: string, email: string, phone: string, password: string): Promise<void> {
  const response = await fetch('/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, phone, password }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'Failed to register');
  }
}

export function logout(): void {
  localStorage.removeItem('token');
  window.location.href = '/';
}