import axios from 'axios';


const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

// Interceptor to add the token in the header of the request
api.interceptors.request.use(
  config => {
    const authTokens = localStorage.getItem('authTokens')
      ? JSON.parse(localStorage.getItem('authTokens'))
      : null;
    if (authTokens && authTokens.access) {
      config.headers.Authorization = `Bearer ${authTokens.access}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
