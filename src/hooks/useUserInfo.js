import { useEffect, useState } from "react";
import { followersService } from "../services/followers";
import { postsService } from "../services/posts";
import { userService } from "../services/user";
import { useAuth } from "./useAuth";

export function useUserInfo({ userToGetInfoId }) {
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
    const user = await userService.getUserById({ id: userToGetInfoId });
    setSelectedUser(user);
  }

  async function getAmountOfFollowers() {
    const followers = await followersService.getUserFollowers({
      userId: userToGetInfoId,
    });

    setUserFollowers(followers.length);
  }

  async function getAmountOfFollowings() {
    const follows = await followersService.getWhoUserFollows({
      userId: userToGetInfoId,
    });

    setWhoUserFollows(follows.length);
  }

  async function getAmountOfPostsByUserId() {
    const postsAmount = await postsService.getAmountOfPostsByUserId({
      userId: userToGetInfoId,
    });

    setPostsAmount(postsAmount);
  }

  async function verifyIfIsLoggedInUserFollowing() {
    const isFollowing = await followersService.isFollowing({
      followerUserId: user.id,
      userIdToCheck: userToGetInfoId,
    });

    setIsLoggedInUserFollowing(isFollowing);
  }

  async function followOrUnfollowUser() {
    if (isLoggedInUserFollowing) {
      await followersService.unfollow({
        followerUserId: user.id,
        userIdToUnfollow: userToGetInfoId,
      });

      setIsLoggedInUserFollowing(false);
    } else {
      await followersService.follow({
        followerUserId: user.id,
        userIdToFollow: userToGetInfoId,
      });

      setIsLoggedInUserFollowing(true);
    }

    await getAmountOfFollowers();
  }

  return {
    postsAmount,
    userFollows,
    selectedUser,
    userFollowers,
    loggedInUser: user,
    followOrUnfollowUser,
    isLoggedInUserFollowing,
  };
}
