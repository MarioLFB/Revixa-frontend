import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getReviewById } from "../services/reviews";

const ReviewContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
`;

const ReviewTitle = styled.h2`
  font-size: 1.5rem;
  color: #ff6347;
  margin-bottom: 10px;
`;

const ReviewContentText = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

function ReviewContent() {
  const { reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchReview = async () => {
      try {
        const data = await getReviewById(reviewId);
        setReview(data);
      } catch (error) {
        console.error("Error fetching review:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReview();
  }, [reviewId]);

  if (loading) return <p>Loading review...</p>;
  if (!review) return <p>Review not found.</p>;

  return (
    <ReviewContainer>
      <ReviewTitle>{review.framework_name}</ReviewTitle>
      <ReviewContentText>{review.content}</ReviewContentText>
    </ReviewContainer>
  );
}

export default ReviewContent;
