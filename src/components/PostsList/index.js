import { usePosts } from "../../hooks/usePosts";
import { PostCard } from "../PostCard";
import { Divider } from "./styles";

export function PostsList({ onProfileClick, userIdToFilterPosts }) {
  const { posts } = usePosts();

  function returnPostsFiltered() {
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
