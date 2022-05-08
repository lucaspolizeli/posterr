import { AddPost } from "../../components/AddPost";
import { PostCard } from "../../components/PostCard";
import {
  AddPostContainer,
  Divider,
  FeedContainer,
  PostsContainer,
} from "./styles";

export function FeedPage() {
  return (
    <FeedContainer>
      <AddPostContainer>
        <AddPost userName={"Lucas"} />
      </AddPostContainer>

      <PostsContainer>
        <PostCard />

        <Divider />

        <PostCard />
      </PostsContainer>
    </FeedContainer>
  );
}
