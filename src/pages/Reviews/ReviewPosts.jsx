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
import styled from "styled-components";
import ReviewContent from "../../components/ReviewContent";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const SubmitButton = styled.button`
  background-color: #ff7f50;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e67345;
    color: white;
  }
`;

const ReviewPostsWrapper = styled.div`
  padding: 40px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const FormWrapper = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 1rem;
  margin-bottom: 15px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h2`
  font-family: 'Pacifico', sans-serif;
  color: #ff6347;
  text-align: center;
  margin-bottom: 20px;
`;

const PostCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PostContent = styled.p`
  font-size: 1.2rem;
  color: #333;
`;

function ReviewPosts() {
  const { user } = useContext(AuthContext);
  const { reviewId } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPostContent, setNewPostContent] = useState("");
  const [editPostId, setEditPostId] = useState(null);
  const [editPostContent, setEditPostContent] = useState("");
  const [error, setError] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPostsByReviewId(reviewId);
        setPosts(data);
      } catch (error) {
        // console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [reviewId]);

  const handleSubmitPost = async (e) => {
    e.preventDefault();

    if (!newPostContent.trim()) {
      toast.error("Post content cannot be empty", {
        position: "top-center",
        autoClose: 5000,
      });
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
      toast.success("Post submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (err) {
      // console.error("Failed to create post:", err);
      toast.error("Failed to submit post", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  const handleEditPost = (post) => {
    setEditPostId(post.id);
    setEditPostContent(post.content);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    if (!editPostContent.trim()) {
      toast.error("Post content cannot be empty", {
        position: "top-center",
        autoClose: 5000,
      });
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
      toast.success("Post edited successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      // console.error("Failed to update post:", error);
      toast.error("Failed to edit post", {
        position: "top-center",
        autoClose: 5000,
      });
    }
  };

  const handleDeleteClick = (postId) => {
    setPostToDelete(postId);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      await deletePost(postToDelete);
      setPosts(posts.filter((post) => post.id !== postToDelete));
      toast.success("Post deleted successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      // console.error("Failed to delete post:", error);
      toast.error("Failed to delete post", {
        position: "top-center",
        autoClose: 5000,
      });
    } finally {
      setShowDeleteModal(false);
      setPostToDelete(null);
    }
  };

  if (!user) {
    return <p>You need to be logged in to view and create posts.</p>;
  }

  if (loading) {
    return <p>Loading posts...</p>;
  }

  return (
    <ReviewPostsWrapper>
      <SubmitButton onClick={() => navigate("/dashboard")}>
        Back to Reviews
      </SubmitButton>

      <ReviewContent />

      <FormWrapper onSubmit={handleSubmitPost}>
        <Title>Got something to share? Let's hear it!</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <TextArea
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
          placeholder="Write your post here"
          rows="4"
        />
        <SubmitButton type="submit">Submit Post</SubmitButton>
      </FormWrapper>

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDeleteConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>

      {posts.length > 0 ? (
        posts.map((post) => (
          <PostCard key={post.id}>
            <PostContent>
              <strong>{post.author}</strong> on{" "}
              {new Date(post.created_at).toLocaleString()}
            </PostContent>

            {editPostId === post.id ? (
              <form onSubmit={handleSaveEdit}>
                <TextArea
                  value={editPostContent}
                  onChange={(e) => setEditPostContent(e.target.value)}
                  rows="4"
                />
                <SubmitButton type="submit">Save</SubmitButton>
                <SubmitButton type="button" onClick={() => setEditPostId(null)}>
                  Cancel
                </SubmitButton>
              </form>
            ) : (
              <>
                <Post post={post} />
                {user.username === post.author && (
                  <div>
                    <SubmitButton className="me-2" onClick={() => handleEditPost(post)}>
                      Edit
                    </SubmitButton>
                    <SubmitButton onClick={() => handleDeleteClick(post.id)}>
                      Delete
                    </SubmitButton>
                  </div>
                )}
              </>
            )}
          </PostCard>
        ))
      ) : (
        <p>No posts found for this review.</p>
      )}
    </ReviewPostsWrapper>
  );
}

export default ReviewPosts;
