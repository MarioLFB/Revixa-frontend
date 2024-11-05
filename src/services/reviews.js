import api from './api';

export async function getAllReviews() {
  try {
    const response = await api.get('/reviews/');
    return response.data;
  } catch (error) {
    // console.error('Error fetching reviews:', error);
    throw error;
  }
}


export async function getReviewById(id) {
  try {
    const response = await api.get(`/reviews/${id}/`);
    return response.data;
  } catch (error) {
    // console.error("Error fetching review by ID:", error);
    throw error;
  }
}