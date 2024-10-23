import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { loginUser, registerUser } from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwt_decode(JSON.parse(localStorage.getItem('authTokens')).access) : null
  );

  useEffect(() => {
  }, [authTokens, user]);

  const login = async (credentials) => {
    try {
      const data = await loginUser(credentials);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } catch (error) {
      console.error('Login Error:', error);
    }
  };

  const register = async (credentials) => {
    try {
      const data = await registerUser(credentials);
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } catch (error) {
      console.error('Register Error:', error);
    }
  };

  const logout = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
  };

  return (
    <AuthContext.Provider value={{ authTokens, user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;