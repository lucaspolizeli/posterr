import { AddPost } from "../../components/AddPost";
import { PostCard } from "../../components/PostCard";
import {
  AddPostContainer,
  Divider,
  FeedContainer,
  PostsContainer,
} from "./styles";

export function FeedPage() {
  const mock = {
    id: 23423,
    author: {
      id: 1,
      user: "lucaspolizeli",
    },
    type: "quote",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    mollit anim id est laborum.`,
    createdBy: {
      id: 2,
      user: "thomas", // o cara que retweeta e afins fica aqui
    },
    quote: {
      author: { id: 123, user: "ronald" },
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.`,
    },
  };

  return (
    <FeedContainer>
      <AddPostContainer>
        <AddPost userName={"Lucas"} />
      </AddPostContainer>

      <PostsContainer>
        <PostCard
          type={mock.type}
          text={mock.text}
          author={mock.author}
          createdBy={mock.createdBy.user}
          quoteText={mock?.quote?.text}
          quoteUser={mock?.quote?.author}
        />

        <Divider />
      </PostsContainer>
    </FeedContainer>
  );
}
