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

// Interceptor to refresh the token if it is expired
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // if the error is 401 and the request has not been retried yet
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const authTokens = localStorage.getItem('authTokens')
        ? JSON.parse(localStorage.getItem('authTokens'))
        : null;

      if (authTokens && authTokens.refresh) {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/token/refresh/', {
            refresh: authTokens.refresh,
          });    













export default api;
