import { useEffect, useState } from "react";
import Modal from "react-modal";
import { userService } from "../../services/user";
import { AddPost } from "../AddPost";
import { PostsList } from "../PostsList";
import { Divider } from "../PostsList/styles";
import {
  AddPostContainer,
  CloseButton,
  UserFeedTitle,
  UsernameTitle,
  UserPropertiesContainer,
  UserPropertyItemWrapper,
} from "./styles";

export function UserInfoModal({ onCloseModal, userId }) {
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUserOnOpenModal();
  }, []);

  async function getUserOnOpenModal() {
    const user = await userService.getUserById({ id: userId });
    setSelectedUser(user);
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
          <p>{selectedUser?.createdAt}</p>
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
          <p>50</p>
        </UserPropertyItemWrapper>
      </UserPropertiesContainer>

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
