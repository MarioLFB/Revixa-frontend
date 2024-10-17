import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { getAllReviews } from "../../services/reviews";

function Reviews() {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchReviews = async () => {
      try {
        const data = await getAllReviews();
        setReviews(data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [user]);

  if (!user) {
    return <p>You need to be logged in to see the reviews.</p>;
  }

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  const handleViewPosts = (reviewId) => {
    navigate(`/reviews/${reviewId}/posts`);
  };

  return (
    <div>
      <h1>All Reviews</h1>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <h2>{review.title}</h2>
              <p>{review.content}</p>
              <p>Framework: {review.framework_name}</p>
              <p>Version: {review.framework_version}</p>
              <p>Author: {review.author}</p>
              <p>Created on: {new Date(review.created_at).toLocaleString()}</p>
              <button onClick={() => handleViewPosts(review.id)}>
                View Posts
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}

export default Reviews;
