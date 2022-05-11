import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AddPost } from "../../components/AddPost";
import { FeedFilter } from "../../components/FeedFilter";
import { PostsList } from "../../components/PostsList";
import { UserInfoModal } from "../../components/UserInfoModal";
import { validRoutes } from "../../constants/valid-routes";

import {
  AddPostContainer,
  FeedContainer,
  FeedHeaderContainer,
  FeedTitle,
  PostsListContainer,
} from "./styles";

export function FeedPage() {
  const [isUserInfoModalOpen, setUserInfoModalOpen] = useState(false);

  const [selectedUserIdToShowOnModal, setSelectedUserIdToShowOnModal] =
    useState(false);

  useEffect(() => {
    validateRoutesOnLoadPage();
  }, []);

  const history = useHistory();

  function validateRoutesOnLoadPage() {
    const currentPath = history.location.pathname;

    const isValidRoute =
      currentPath === `/${validRoutes.FILTER_ALL}` ||
      currentPath === `/${validRoutes.FILTER_FOLLOWING}`;

    if (!isValidRoute) {
      history.push(`/${validRoutes.FILTER_ALL}`);
    }
  }

  function handleOnClickToCloseUserInfoModal() {
    setUserInfoModalOpen(!setUserInfoModalOpen);

    history.push(`/${validRoutes.FILTER_ALL}`);
  }

  function handleOnProfileClick(selectedUserId) {
    setSelectedUserIdToShowOnModal(selectedUserId);
    setUserInfoModalOpen(true);

    history.push(`/${validRoutes.USER_INFO}`);
  }

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

      <PostsListContainer>
        <PostsList onProfileClick={handleOnProfileClick} />
      </PostsListContainer>

      {isUserInfoModalOpen && (
        <UserInfoModal
          userId={selectedUserIdToShowOnModal}
          onCloseModal={handleOnClickToCloseUserInfoModal}
        />
      )}
    </FeedContainer>
  );
}
