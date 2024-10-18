import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { getPostsByReviewId, createPost, updatePost, deletePost } from '../../services/posts';

function ReviewPosts() {
  const { user } = useContext(AuthContext);
  const { reviewId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState('');
  const [editPostId, setEditPostId] = useState(null);
  const [editPostContent, setEditPostContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const fetchPosts = async () => {
      try {
        const data = await getPostsByReviewId(reviewId);
        setPosts(data);
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user, reviewId]);

  if (!user) {
    return <p>You need to be logged in to view the posts.</p>;
  }

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <h1>Posts for Review {reviewId}</h1>
      <button onClick={() => navigate("/reviews")}>Back to Reviews</button>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>
                <strong>{post.author}</strong> on{" "}
                {new Date(post.created_at).toLocaleString()}
              </p>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found for this review.</p>
      )}
    </div>
  );
}

export default ReviewPosts;
