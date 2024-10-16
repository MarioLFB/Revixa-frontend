import api from './api';

export async function getPostsByReviewId(reviewId) {
  try {
    const response = await api.get(`/social/reviews/${reviewId}/posts/`);
    return response.data;
  } catch (error) {
    console.error('Error when searching posts:', error);
    throw error;
  }
}