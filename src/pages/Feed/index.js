import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AddPost } from "../../components/AddPost";
import { PostCard } from "../../components/PostCard";
import { Switcher } from "../../components/Switcher";
import { usePosts } from "../../hooks/usePosts";

import {
  AddPostContainer,
  Divider,
  FeedContainer,
  FeedHeaderContainer,
  FeedTitle,
  FilterSwitcherContainer,
  PostsContainer,
} from "./styles";

export function FeedPage() {
  const { posts } = usePosts();
  const history = useHistory();

  useEffect(() => {
    const hasSelectedRoute = history.location.pathname !== "/";

    if (!hasSelectedRoute) {
      history.push("/all");
    }
  }, [history]);

  return (
    <FeedContainer>
      <AddPostContainer>
        <AddPost />
      </AddPostContainer>

      <FeedHeaderContainer>
        <FeedTitle>
          your <span>feed</span>.
        </FeedTitle>
        <Switcher />
      </FeedHeaderContainer>

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
