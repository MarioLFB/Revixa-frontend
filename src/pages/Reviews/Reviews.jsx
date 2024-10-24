import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { getAllReviews } from "../../services/reviews";
import styled from "styled-components";

const ReviewsWrapper = styled.div`
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const ReviewCard = styled.div`
  background: linear-gradient(270deg, #ff824d, #ff6347);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: white;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  width: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ReviewTitle = styled.h2`
  font-size: 1.8rem;
  font-family: 'Pacifico', sans-serif;
  color: #fff;
`;

const ReviewInfo = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const ViewButton = styled.button`
  background-color: #fff;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Pacifico', sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;

function Reviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleViewPosts = (reviewId) => {
    if (!user) {
      alert("You need to be logged in to view posts.");
      navigate("/login");
    } else {
      navigate(`/reviews/${reviewId}/posts`);
    }
  };

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <ReviewsWrapper>
      <h1>All Reviews</h1>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <ReviewCard key={review.id}>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewInfo><strong>Framework:</strong> {review.framework_name}</ReviewInfo>
            <ReviewInfo><strong>Version:</strong> {review.framework_version}</ReviewInfo>
            <ReviewInfo><strong>Author:</strong> {review.author}</ReviewInfo>
            <ReviewInfo><strong>Created on:</strong> {new Date(review.created_at).toLocaleString()}</ReviewInfo>
            <ViewButton onClick={() => handleViewPosts(review.id)}>
              {user ? "View Posts" : "Login to View Posts"}
            </ViewButton>
          </ReviewCard>
        ))
      ) : (
        <p>No reviews found.</p>
      )}
    </ReviewsWrapper>
  );
}

export default Reviews;
