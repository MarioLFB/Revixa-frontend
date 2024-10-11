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