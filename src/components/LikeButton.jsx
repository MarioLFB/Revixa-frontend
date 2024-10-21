import React, { useState, useContext } from 'react';
import { likePost, unlikePost } from '../services/like';
import AuthContext from '../context/AuthContext';


function LikeButton({ postId, isLiked, onLikeToggle }) {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const handleClick = async () => {
    if (!user) {
      alert("You need to be logged in to like posts.");
      return;
    }

    setLoading(true);
    try {
      if (isLiked) {
        await unlikePost(postId);
        onLikeToggle(false);
      } else {
        await likePost(postId);
        onLikeToggle(true);
      }
    } catch (error) {
      console.error('Error while liking/unliking the post:', error);
      alert("There was an error processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      {isLiked ? 'Unlike' : 'Like'}
    </button>
  );
}

export default LikeButton;
