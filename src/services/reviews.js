import api from './api';

export async function getAllReviews() {
  try {
    const response = await api.get('/reviews/');
    return response.data;
  } catch (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }
}