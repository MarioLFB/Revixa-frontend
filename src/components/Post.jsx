import React, { useState } from 'react';
import LikeButton from './LikeButton';

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(post.is_liked);
  const [likesCount, setLikesCount] = useState(post.likes_count);

  const handleLikeToggle = (liked) => {
    setIsLiked(liked);
    setLikesCount(prev => prev + (liked ? 1 : -1));
  };

  return (
    <div className="post">
      <div>{post.content}</div>
      <LikeButton
        postId={post.id}
        isLiked={isLiked}
        onLikeToggle={handleLikeToggle}
      />
      <span>{likesCount} likes</span>
    </div>
  );
}

export default Post;
