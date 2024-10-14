import axios from "axios";

const API_URL = "http://127.0.0.1:8000/social/posts/";

export const getPosts = async (token) => {
  const response = await axios.get(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createPost = async (postData, token) => {
  const response = await axios.post(API_URL, postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updatePost = async (postId, postData, token) => {
  const response = await axios.put(`${API_URL}${postId}/`, postData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deletePost = async (postId, token) => {
  const response = await axios.delete(`${API_URL}${postId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const likePost = async (postId, token) => {
  const response = await axios.post(
    `http://127.0.0.1:8000/social/posts/${postId}/like/`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const unlikePost = async (postId, token) => {
  const response = await axios.delete(
    `http://127.0.0.1:8000/social/posts/${postId}/like/`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
