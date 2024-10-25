import React, { useState } from 'react';
import LikeButton from './LikeButton';
import styled from 'styled-components';

const PostWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LikesCount = styled.span`
  font-size: 1rem;
  color: #333;
  font-family: 'Pacifico', sans-serif;
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
      <LikeContainer>
        <LikeButton
          postId={post.id}
          isLiked={isLiked}
          onLikeToggle={handleLikeToggle}
        />
        <LikesCount>{likesCount} likes</LikesCount>
      </LikeContainer>
    </PostWrapper>
  );
}

export default Post;
