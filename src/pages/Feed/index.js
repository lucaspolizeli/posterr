import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AddPost } from "../../components/AddPost";
import { PostCard } from "../../components/PostCard";
import { usePosts } from "../../hooks/usePosts";

import {
  AddPostContainer,
  Divider,
  FeedContainer,
  PostsContainer,
} from "./styles";

export function FeedPage() {
  const { posts } = usePosts();
  const history = useHistory();

  useEffect(() => {
    handleRouteOnLoadTheComponent();
  }, []);

  function handleRouteOnLoadTheComponent() {
    const hasSelectedRoute = history.location.pathname !== "/";

    if (!hasSelectedRoute) {
      history.push("/all");
    }
  }

  return (
    <FeedContainer>
      <AddPostContainer>
        <AddPost />
      </AddPostContainer>

      <PostsContainer>
        {posts.map((currentPost, index) => (
          <div key={currentPost.id}>
            <PostCard
              postId={currentPost.id}
              type={currentPost.type}
              text={currentPost.text}
              author={currentPost.author}
              createdBy={currentPost.createdBy}
              quoteText={currentPost?.quote?.text}
              quoteUser={currentPost?.quote?.author}
            />

            {index !== posts.length && <Divider />}
          </div>
        ))}
      </PostsContainer>
    </FeedContainer>
  );
}
