import api from './api';

export async function getPostsByReviewId(reviewId) {
  try {
    const response = await api.get(`/social/reviews/${reviewId}/posts/`);
    return response.data;
  } catch (error) {
    // console.error('Error when searching posts:', error);
    throw error;
  }
}


export async function createPost(reviewId, postData) {
  try {
    const response = await api.post(`/social/reviews/${reviewId}/posts/`, postData);
    return response.data;
  } catch (error) {
    // console.error('Error when creating post:', error);
    throw error;
  }
}


export async function updatePost(postId, postData) {
  try {
    const response = await api.put(`/social/posts/${postId}/`, postData);
    return response.data;
  } catch (error) {
    // console.error('Error when updating post:', error);
    throw error;
  }
}


export async function deletePost(postId) {
  try {
    await api.delete(`/social/posts/${postId}/`);
  } catch (error) {
    // console.error('Error when deleting post:', error);
    throw error;
  }
}