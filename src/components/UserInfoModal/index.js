import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useAuth } from "../../hooks/useAuth";
import { followersService } from "../../services/followers";
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
  const { user } = useAuth();

  const [selectedUser, setSelectedUser] = useState({});
  const [postsAmount, setPostsAmount] = useState(0);

  const [userFollowers, setUserFollowers] = useState(0);
  const [userFollows, setWhoUserFollows] = useState(0);

  const [isLoggedInUserFollowing, setIsLoggedInUserFollowing] = useState(false);

  useEffect(() => {
    getUser();

    getAmountOfFollowers();
    getAmountOfFollowings();

    verifyIfIsLoggedInUserFollowing();

    getAmountOfPostsByUserId();
  }, [user]);

  async function getUser() {
    const user = await userService.getUserById({ id: userId });
    setSelectedUser(user);
  }

  async function getAmountOfFollowers() {
    const followers = await followersService.getUserFollowers({ userId });
    setUserFollowers(followers.length);
  }

  async function getAmountOfFollowings() {
    const follows = await followersService.getWhoUserFollows({ userId });
    setWhoUserFollows(follows.length);
  }

  async function getAmountOfPostsByUserId() {
    const postsAmount = await postsService.getAmountOfPostsByUserId({ userId });
    setPostsAmount(postsAmount);
  }

  async function handleOnClickToFollowOrUnfollow() {
    if (isLoggedInUserFollowing) {
      await followersService.unfollow({
        followerUserId: user.id,
        userIdToUnfollow: userId,
      });

      setIsLoggedInUserFollowing(false);
    } else {
      await followersService.follow({
        followerUserId: user.id,
        userIdToFollow: userId,
      });

      setIsLoggedInUserFollowing(true);
    }

    await getAmountOfFollowers();
  }

  async function verifyIfIsLoggedInUserFollowing() {
    const isFollowing = await followersService.isFollowing({
      followerUserId: user.id,
      userIdToCheck: userId,
    });

    setIsLoggedInUserFollowing(isFollowing);
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
          <p>{userFollowers}</p>
        </UserPropertyItemWrapper>

        <UserPropertyItemWrapper>
          <h4>Following</h4>
          <p>{userFollows}</p>
        </UserPropertyItemWrapper>

        <UserPropertyItemWrapper>
          <h4>Posts</h4>
          <p>{postsAmount}</p>
        </UserPropertyItemWrapper>
      </UserPropertiesContainer>

      <Divider />

      {userId !== user.id && (
        <ButtonContainer>
          <Button
            onClick={handleOnClickToFollowOrUnfollow}
            text={isLoggedInUserFollowing ? "Unfollow" : "Follow"}
          />
        </ButtonContainer>
      )}

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
