import api from './api';

export async function likePost(postId) {
    try {
        const response = await api.post(`/social/posts/${postId}/like/`);
        return response.data;
    } catch (error) {
        // console.error('Error when liking post:', error);
        throw error;
    }
}

export async function unlikePost(postId) {
    try {
        const response = await api.delete(`/social/posts/${postId}/like/`);
        return response.data;
    } catch (error) {
        // console.error('Error when unliking post:', error);
        throw error;
    }
}
