import React, { useState, useContext } from 'react';
import { updatePost } from '../services/postService';
import AuthContext from '../context/AuthContext';


function EditPostForm({ post, onPostUpdated }) {
    const [content, setContent] = useState(post.content);
    const { authTokens } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const updatedPost = await updatePost(
          post.id,
          { content },
          authTokens.access
        );
        onPostUpdated(updatedPost);
        setIsEditing(false);
      } catch (error) {
        console.error('Error updating post:', error);
      }
    };
  
    return (
      <div>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button type="submit">Salvar</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </div>
    );
  }
  
  export default EditPostForm;