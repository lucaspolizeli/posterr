import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { validRoutes } from "../../constants/valid-routes";
import { useAuth } from "../../hooks/useAuth";
import { usePosts } from "../../hooks/usePosts";
import { followersService } from "../../services/followers";
import { PostCard } from "../PostCard";
import { Divider } from "./styles";

export function PostsList({ onProfileClick, userIdToFilterPosts, filterMode }) {
  const { user } = useAuth();
  const { posts } = usePosts();

  const [userFollows, setUserFollows] = useState([]);

  useEffect(() => {
    getUserFollows();
  }, [filterMode, userIdToFilterPosts]);

  async function getUserFollows() {
    const userFollows = await followersService.getWhoUserFollows({
      userId: user.id,
    });

    setUserFollows(userFollows.map((userFollow) => userFollow.followingUserId));
  }

  function returnPostsFiltered() {
    const isOnlyFollowingPostsFilter =
      filterMode === validRoutes.FILTER_FOLLOWING;

    if (isOnlyFollowingPostsFilter) {
      return posts.filter((currentPost) => {
        return (
          userFollows.indexOf(currentPost.createdBy.id) > -1 && currentPost
        );
      });
    }

    if (!userIdToFilterPosts) return posts;

    return posts.filter(
      (currentPost) => currentPost.createdBy.id === userIdToFilterPosts
    );
  }

  return (
    <>
      {returnPostsFiltered().map((currentPost, index) => (
        <div key={currentPost.id}>
          <PostCard
            postId={currentPost.id}
            type={currentPost.type}
            text={currentPost.text}
            author={currentPost.author}
            onProfileClick={onProfileClick}
            createdBy={currentPost.createdBy}
            quoteText={currentPost?.quote?.text}
            quoteUser={currentPost?.quote?.author}
          />

          {index !== posts.length && <Divider />}
        </div>
      ))}
    </>
  );
}
