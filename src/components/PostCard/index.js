import {
  ActionTextButton,
  ActionTextButtonsContainer,
  PostCardContainer,
  PostText,
  QuoteTextContainer,
  RepostText,
  UserNameTextButton,
} from "./styles";

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

      {author && (
        <UserNameTextButton onClick={handleOnClickOverUserProfile}>
          @{author.user}
        </UserNameTextButton>
      )}

      {text && <PostText>{text}</PostText>}

      {type === postType.QUOTE && (
        <QuoteTextContainer>
          <UserNameTextButton onClick={handleOnClickOverQuoteUserProfile}>
            @{quoteUser.user}
          </UserNameTextButton>

          <PostText>{quoteText}</PostText>
        </QuoteTextContainer>
      )}

      {type === postType.POST && (
        <ActionTextButtonsContainer>
          <ActionTextButton onClick={() => {}}>repost</ActionTextButton>
          <ActionTextButton onClick={() => {}}>quote</ActionTextButton>
        </ActionTextButtonsContainer>
      )}
    </PostCardContainer>
  );
}
