import api from './api';


export async function loginUser(credentials) {
  try {
    const response = await api.post('/api/token/', credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

export async function registerUser(credentials) {
  try {
    const response = await api.post('/api/user/register/', credentials);
    return response.data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
}


export async function refreshAccessToken(refreshToken) {
    try {
      const response = await api.post('/api/token/refresh/', { refresh: refreshToken });
      return response.data;
    } catch (error) {
      console.error('Refresh token error:', error);
      throw error;
    }
  }