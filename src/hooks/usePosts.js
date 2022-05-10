import { createContext, useContext, useEffect, useState } from "react";
import { postsService } from "../services/posts";
import { useAuth } from "./useAuth";

const PostsContext = createContext({});

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [selectedPostToQuote, setSelectedPostToQuote] = useState(null);

  const { user } = useAuth();

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const allPosts = await postsService.getAllPosts();
    setPosts(allPosts);
  }

  async function createPost({ postText }) {
    const successfullyPosted = await postsService.createPost({
      postText,
      userId: user.id,
    });

    if (successfullyPosted?.error) {
      return;
    }

    await fetchPosts();
  }

  async function createQuote({ postId, quoteText }) {
    const successfullyQuoted = await postsService.createQuote({
      postId,
      quoteText,
      userId: user.id,
    });

    if (successfullyQuoted?.error) {
      return;
    }

    setSelectedPostToQuote(null);
    await fetchPosts();
  }

  async function createRepost({ postId }) {
    const successfullyReposted = await postsService.createRepost({
      postId,
      userId: user.id,
    });

    if (successfullyReposted?.error) {
      return;
    }

    await fetchPosts();
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        createPost,
        createQuote,
        createRepost,
        selectedPostToQuote,
        setSelectedPostToQuote,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export function usePosts() {
  const context = useContext(PostsContext);

  return context;
}
