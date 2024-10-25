import React, { useState, useContext } from 'react';
import { likePost, unlikePost } from '../services/like';
import AuthContext from '../context/AuthContext';
import styled from 'styled-components';

const LikeButtonStyled = styled.button`
  background-color: ${props => (props.$isLiked ? '#ff6347' : '#f0f0f0')};
  color: ${props => (props.$isLiked ? 'white' : '#333')};
  padding: 15px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  font-family: 'Pacifico', sans-serif;

  &:hover {
    background-color: ${props => (props.$isLiked ? '#e67345' : '#dcdcdc')};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

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
    <LikeButtonStyled onClick={handleClick} disabled={loading} $isLiked={isLiked}>
      {isLiked ? 'Unlike' : 'Like'}
    </LikeButtonStyled>
  );
}

export default LikeButton;
