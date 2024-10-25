import React, { useState } from 'react';
import LikeButton from './LikeButton';
import styled from 'styled-components';

const PostWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LikesCount = styled.span`
  font-size: 1rem;
  color: #333;
  font-family: 'Pacifico', sans-serif;
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

function Post({ post }) {
  const [isLiked, setIsLiked] = useState(post.is_liked);
  const [likesCount, setLikesCount] = useState(post.likes_count);

  const handleLikeToggle = (liked) => {
    setIsLiked(liked);
    setLikesCount(prev => prev + (liked ? 1 : -1));
  };

  return (
    <PostWrapper>
      <div>{post.content}</div>
      <div>
        <LikeButton
          postId={post.id}
          isLiked={isLiked}
          onLikeToggle={handleLikeToggle}
        />
        <LikesCount>{likesCount} likes</LikesCount>
      </div>
    </PostWrapper>
  );
}

export default Post;
