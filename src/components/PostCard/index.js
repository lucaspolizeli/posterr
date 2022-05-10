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
import { usePosts } from "../../hooks/usePosts";

export function PostCard({
  type,
  text,
  author,
  postId,
  createdBy,
  quoteUser,
  quoteText,
  onProfileClick,
  onClickToQuote,
}) {
  const { createRepost } = usePosts();

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
          <span onClick={handleOnClickOverWhoReposted}>
            @{createdBy.username}
          </span>
        </RepostText>
      )}

      {author && (
        <UserNameTextButton onClick={handleOnClickOverUserProfile}>
          @{author.username}
        </UserNameTextButton>
      )}

      {text && <PostText>{text}</PostText>}

      {type === postType.QUOTE && (
        <QuoteTextContainer>
          <UserNameTextButton onClick={handleOnClickOverQuoteUserProfile}>
            @{quoteUser.username}
          </UserNameTextButton>

          <PostText>{quoteText}</PostText>
        </QuoteTextContainer>
      )}

      {type === postType.POST && (
        <ActionTextButtonsContainer>
          <ActionTextButton onClick={() => createRepost({ postId })}>
            repost
          </ActionTextButton>

          <ActionTextButton onClick={onClickToQuote}>quote</ActionTextButton>
        </ActionTextButtonsContainer>
      )}
    </PostCardContainer>
  );
}
