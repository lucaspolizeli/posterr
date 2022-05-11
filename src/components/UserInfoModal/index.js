import { useEffect, useState } from "react";
import Modal from "react-modal";
import { postsService } from "../../services/posts";
import { userService } from "../../services/user";
import { dateFormatter } from "../../utils/date";
import { AddPost } from "../AddPost";
import { Button } from "../Button";
import { PostsList } from "../PostsList";
import { Divider } from "../PostsList/styles";
import {
  AddPostContainer,
  ButtonContainer,
  CloseButton,
  UserFeedTitle,
  UsernameTitle,
  UserPropertiesContainer,
  UserPropertyItemWrapper,
} from "./styles";

export function UserInfoModal({ onCloseModal, userId }) {
  const [selectedUser, setSelectedUser] = useState({});
  const [postsAmount, setPostsAmount] = useState(0);

  useEffect(() => {
    getUserOnOpenModal();
    getAmountOfPostsByUserId();
  }, []);

  async function getUserOnOpenModal() {
    const user = await userService.getUserById({ id: userId });
    setSelectedUser(user);
  }

  async function getAmountOfPostsByUserId() {
    const postsAmount = await postsService.getAmountOfPostsByUserId({ userId });
    setPostsAmount(postsAmount);
  }

  return (
    <Modal
      isOpen={true}
      className="react-modal-content"
      overlayClassName="react-modal-overlay"
    >
      <CloseButton onClick={onCloseModal} />

      <UsernameTitle>
        <span>@</span>
        {selectedUser?.username}
      </UsernameTitle>

      <Divider />

      <UserPropertiesContainer>
        <UserPropertyItemWrapper>
          <h4>Member since:</h4>
          <p>{dateFormatter(selectedUser?.createdAt)}</p>
        </UserPropertyItemWrapper>

        <UserPropertyItemWrapper>
          <h4>Followers</h4>
          <p>50</p>
        </UserPropertyItemWrapper>

        <UserPropertyItemWrapper>
          <h4>Following</h4>
          <p>50</p>
        </UserPropertyItemWrapper>

        <UserPropertyItemWrapper>
          <h4>Posts</h4>
          <p>{postsAmount}</p>
        </UserPropertyItemWrapper>
      </UserPropertiesContainer>

      <Divider />

      <ButtonContainer>
        <Button text="Following" />
      </ButtonContainer>

      <Divider />

      <AddPostContainer>
        <AddPost />
      </AddPostContainer>

      <Divider />

      <UserFeedTitle>
        {selectedUser?.name?.toLowerCase()} <span>posts</span>.
      </UserFeedTitle>

      <Divider />

      <PostsList userIdToFilterPosts={userId} />
    </Modal>
  );
}
