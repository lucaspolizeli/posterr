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
