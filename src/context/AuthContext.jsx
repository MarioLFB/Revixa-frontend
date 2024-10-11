import React, { createContext, useState, useEffect } from 'react';
import { loginUser, refreshAccessToken } from '../services/auth';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
      localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    );
    const [user, setUser] = useState(() =>
      localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')).user : null
    );


    const login = async (credentials) => {
        const data = await loginUser(credentials);
        setAuthTokens(data);
        setUser(data.user);
        localStorage.setItem('authTokens', JSON.stringify(data));
      };
    

      const logout = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
      };
    
      return (
        <AuthContext.Provider value={{ authTokens, user, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };
    
    export default AuthContext;