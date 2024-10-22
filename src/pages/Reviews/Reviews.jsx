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
                {user ? "View Posts" : "Login to View Posts"}
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
