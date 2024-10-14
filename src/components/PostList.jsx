import React, { useEffect, useState, useContext } from "react";
import { getPosts, deletePost } from "../services/postService";
import AuthContext from "../context/AuthContext";
import PostForm from "./PostForm";
import EditPostForm from "./EditPostForm";

function PostList() {
  const [posts, setPosts] = useState([]);
  const { user, authTokens } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts(authTokens.access);
        setPosts(data);
      } catch (error) {
        console.error("Error getting posts:", error);
      }
    };

    fetchPosts();
  }, [authTokens]);

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId, authTokens.access);
      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error("Error when deleting post:", error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <PostForm onPostCreated={(newPost) => setPosts([newPost, ...posts])} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.content}</p>
            <p>Autor: {post.author}</p>
            {post.author === user.username && (
              <div>
                <EditPostForm
                  post={post}
                  onPostUpdated={(updatedPost) =>
                    setPosts(
                      posts.map((p) =>
                        p.id === updatedPost.id ? updatedPost : p
                      )
                    )
                  }
                />
                <button onClick={() => handleDelete(post.id)}>Deletar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
