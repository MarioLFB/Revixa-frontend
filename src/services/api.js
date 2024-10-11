import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

// Interceptor to add the Authorization header to requests
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

// Interceptor to handle 401 errors and refresh the token
api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    // if the error is 401 and the request hasn't been retried yet
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

          localStorage.setItem('authTokens', JSON.stringify(response.data));

          const event = new Event('tokenRefreshed');
          window.dispatchEvent(event);

          originalRequest.headers['Authorization'] = 'Bearer ' + response.data.access;

          return api(originalRequest);
        } catch (err) {
          console.error('Erro ao atualizar o token:', err);
          localStorage.removeItem('authTokens');
          window.location.href = '/login';
          return Promise.reject(err);
        }
      } else {
        localStorage.removeItem('authTokens');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default api;
