import {
  IconButton,
  IconButtonsContainer,
  PostCardContainer,
  PostText,
  QuoteContainer,
  RepostText,
  UserNameText,
} from "./styles";

import repostIcon from "../../assets/icons/repost.svg";
import commentIcon from "../../assets/icons/comment.svg";
import { postType } from "../../constants/post-type";

export function PostCard({
  type,
  text,
  author,
  createdBy,
  quoteUser,
  quoteText,
  onProfileClick,
}) {
  function handleOnClickOverUserProfile() {
    onProfileClick(author.id);
  }

  function handleOnClickOverQuoteUserProfile() {
    onProfileClick(quoteUser.id);
  }

  function handleOnClickOverWhoReposted() {
    onProfileClick(createdBy.id);
  }

  return (
    <PostCardContainer>
      {type === postType.REPOST && (
        <RepostText>
          ↓ reposted by
          <span onClick={handleOnClickOverWhoReposted}>@{createdBy.user}</span>
        </RepostText>
      )}

      <UserNameText onClick={handleOnClickOverUserProfile}>
        @{author.user}
      </UserNameText>
      <PostText>{text}</PostText>

      {type === postType.QUOTE && (
        <QuoteContainer>
          <UserNameText onClick={handleOnClickOverQuoteUserProfile}>
            @{quoteUser.user}
          </UserNameText>

          <PostText>{quoteText}</PostText>
        </QuoteContainer>
      )}

      {type === postType.POST && (
        <IconButtonsContainer>
          <IconButton image={repostIcon} />
          <IconButton image={commentIcon} />
        </IconButtonsContainer>
      )}
    </PostCardContainer>
  );
}
