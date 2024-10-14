import React, { useEffect, useState, useContext } from 'react';
import { getPosts, deletePost } from '../services/postService';
import AuthContext from '../context/AuthContext';
import PostForm from './PostForm';
import EditPostForm from './EditPostForm';
import LikeButton from './LikeButton';

function PostList() {
  const [posts, setPosts] = useState([]);
  const { user, authTokens } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(authTokens.access);
        setPosts(data);
      } catch (error) {
        console.error('Error getting posts:', error);
      }
    };

    fetchPosts();
  }, [authTokens]);

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId, authTokens.access);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Error deleting the post:', error);
    }
  };

  const updatePost = (updatedPost) => {
    setPosts(
      posts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  return (
    <div>
      <h2>Posts</h2>
      <PostForm onPostCreated={(newPost) => setPosts([newPost, ...posts])} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
            <p>Likes: {post.likes_count}</p>
            <LikeButton post={post} onLikeToggle={updatePost} />
            {post.author === user.username && (
              <div>
                <EditPostForm post={post} onPostUpdated={updatePost} />
                <button onClick={() => handleDelete(post.id)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;