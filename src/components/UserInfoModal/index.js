import { useEffect, useState } from "react";
import Modal from "react-modal";
import { userService } from "../../services/user";
import { PostsList } from "../PostsList";
import { Divider } from "../PostsList/styles";
import {
  CloseButton,
  UserFeedTitle,
  UsernameTitle,
  UserPropertiesContainer,
  UserPropertyItemWrapper,
} from "./styles";

export function UserInfoModal({ isOpen, onCloseModal, userId }) {
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    if (!isOpen) return;

    getUserOnOpenModal();
  }, [isOpen]);

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
          <p>March 25, 2021</p>
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

      <UserFeedTitle>
        lucas <span>posts</span>.
      </UserFeedTitle>

      <Divider />

      <PostsList userIdToFilterPosts={"6b25eda9-14e7-4874-b1fd-9b3c093a26b4"} />
    </Modal>
  );
}
