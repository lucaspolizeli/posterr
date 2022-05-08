import { AddPost } from "../../components/AddPost";
import { AddPostContainer, FeedContainer } from "./styles";

export function FeedPage() {
  return (
    <FeedContainer>
      <AddPostContainer>
        <AddPost userName={"Lucas"} />
      </AddPostContainer>
    </FeedContainer>
  );
}
