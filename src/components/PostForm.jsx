import React, { useState, useContext } from 'react';
import { createPost } from '../services/postService';
import AuthContext from '../context/AuthContext';

function PostForm({ onPostCreated }) {
  const [content, setContent] = useState('');
  const { authTokens } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await createPost({ content }, authTokens.access);
      onPostCreated(newPost);
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create New Post</h3>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your post here..."
      ></textarea>
      <button type="submit">Publish</button>
    </form>
  );
}

export default PostForm;