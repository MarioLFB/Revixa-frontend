import React, { useEffect, useState, useContext } from 'react';
import { getPosts, deletePost } from '../services/postService';
import AuthContext from '../context/AuthContext';
import PostForm from './PostForm';
import EditPostForm from './EditPostForm';


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
        console.error('Error when deleting post:', error);
      }
    };