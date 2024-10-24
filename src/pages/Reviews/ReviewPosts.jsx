import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import {
  getPostsByReviewId,
  createPost,
  updatePost,
  deletePost,
} from "../../services/posts";
import Post from "../../components/Post";
import PrimaryButton from "../../components/PrimaryButton";

function ReviewPosts() {
  const { user } = useContext(AuthContext);
  const { reviewId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editPostContent, setEditPostContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsByReviewId(reviewId);
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [reviewId]);

  const handleSubmitPost = async (e) => {
    e.preventDefault();

    if (!newPostContent.trim()) {
      setError("Post content cannot be empty");
      return;
    }

    try {
      const newPost = await createPost(reviewId, {
        content: newPostContent,
        author: user.username,
      });
      setPosts([...posts, newPost]);
      setNewPostContent("");
      setError("");
    } catch (err) {
      console.error("Failed to create post:", err);
      setError("Failed to create post");
    }
  };

  const handleEditPost = (post) => {
    setEditPostId(post.id);
    setEditPostContent(post.content);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    if (!editPostContent.trim()) {
      setError("Post content cannot be empty");
      return;
    }

    try {
      await updatePost(editPostId, { content: editPostContent });
      setPosts(
        posts.map((post) =>
          post.id === editPostId ? { ...post, content: editPostContent } : post
        )
      );
      setEditPostId(null);
      setEditPostContent("");
      setError("");
    } catch (error) {
      console.error("Failed to update post:", error);
      setError("Failed to update post");
    }
  };

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  if (!user) {
    return <p>You need to be logged in to view and create posts.</p>;
  }

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <div>
      <PrimaryButton onClick={() => navigate("/reviews")}>
        Back to Reviews
      </PrimaryButton>

      <form onSubmit={handleSubmitPost}>
        <h2>Got something to share? Let's hear it!</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <textarea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Write your post here"
          rows="4"
        />
        <button type="submit">Submit Post</button>
      </form>

      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>
                <strong>{post.author}</strong> on{" "}
                {new Date(post.created_at).toLocaleString()}
              </p>

              {editPostId === post.id ? (
                <form onSubmit={handleSaveEdit}>
                  <textarea
                    value={editPostContent}
                    onChange={(e) => setEditPostContent(e.target.value)}
                    rows="4"
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditPostId(null)}>
                    Cancel
                  </button>
                </form>
              ) : (
                <>
                  <Post post={post} />
                  {user.username === post.author && (
                    <div>
                      <button onClick={() => handleEditPost(post)}>Edit</button>
                      <button onClick={() => handleDelete(post.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </>
              )}
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
