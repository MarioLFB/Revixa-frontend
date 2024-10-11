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