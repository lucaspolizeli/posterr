import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AddPost } from "../../components/AddPost";
import { FeedFilter } from "../../components/FeedFilter";
import { PostCard } from "../../components/PostCard";
import { validRoutes } from "../../constants/valid-routes";
import { usePosts } from "../../hooks/usePosts";

import {
  AddPostContainer,
  Divider,
  FeedContainer,
  FeedHeaderContainer,
  FeedTitle,
  PostsContainer,
} from "./styles";

export function FeedPage() {
  const { posts } = usePosts();
  const history = useHistory();

  useEffect(() => {
    const currentPath = history.location.pathname;

    const isValidRoute =
      currentPath === `/${validRoutes.FILTER_ALL}` ||
      currentPath === `/${validRoutes.FILTER_FOLLOWING}` ||
      currentPath === `/${validRoutes.USER_INFO}`;

    if (!isValidRoute) {
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

        <FeedFilter />
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
