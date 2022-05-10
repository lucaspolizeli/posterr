import { createContext, useContext, useEffect, useState } from "react";
import { postsService } from "../services/posts";
import { useAuth } from "./useAuth";

const PostsContext = createContext({});

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const allPosts = await postsService.getAllPosts();
    setPosts(allPosts);
  }

  async function createPost({ postText }) {
    const responseFromAddNewPost = await postsService.addNewPost({
      postText,
      userId: user.id,
    });

    if (responseFromAddNewPost?.error) {
      return;
    }

    await fetchPosts();
  }

  return (
    <PostsContext.Provider value={{ posts, createPost }}>
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
