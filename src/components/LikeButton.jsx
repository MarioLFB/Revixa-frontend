import React, { useState, useEffect, useContext } from 'react';
import { likePost, unlikePost } from '../services/postService';
import AuthContext from '../context/AuthContext';


function LikeButton({ post, onLikeToggle }) {
    const { authTokens, user } = useContext(AuthContext);
    const [liked, setLiked] = useState(false);
  
    useEffect(() => {
      if (post.liked_by && post.liked_by.includes(user.username)) {
        setLiked(true);
      } else {
        setLiked(false);
      }
    }, [post, user.username]);
  
    const handleLike = async () => {
      try {
        if (liked) {
          await unlikePost(post.id, authTokens.access);
        } else {
          await likePost(post.id, authTokens.access);
        }
        const updatedPost = {
          ...post,
          likes_count: liked ? post.likes_count - 1 : post.likes_count + 1,
          liked_by: liked
            ? post.liked_by.filter((username) => username !== user.username)
            : [...post.liked_by, user.username],
        };
        onLikeToggle(updatedPost);
        setLiked(!liked);
      } catch (error) {
        console.error('Error when (dis)liking the post:', error);
      }
    };
  
    return (
      <button onClick={handleLike}>{liked ? 'Unlike' : 'Like'}</button>
    );
  }
  
  export default LikeButton;