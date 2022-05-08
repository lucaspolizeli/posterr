import {
  IconButton,
  IconButtonsContainer,
  PostCardContainer,
  PostText,
  RepostText,
  UserNameText,
} from "./styles";

import repostIcon from "../../assets/icons/repost.svg";
import commentIcon from "../../assets/icons/comment.svg";

export function PostCard() {
  return (
    <PostCardContainer>
      <RepostText>
        ↓ repost by <span>ronaldinholoko</span>
      </RepostText>

      <UserNameText>Lucas</UserNameText>
      <PostText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </PostText>

      <IconButtonsContainer>
        <IconButton image={repostIcon} />
        <IconButton image={commentIcon} />
      </IconButtonsContainer>
    </PostCardContainer>
  );
}
