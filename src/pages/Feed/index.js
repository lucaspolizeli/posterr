import { useEffect, useState } from "react";
import { AddPost } from "../../components/AddPost";
import { PostCard } from "../../components/PostCard";
import { postsService } from "../../services/posts";
import {
  AddPostContainer,
  Divider,
  FeedContainer,
  PostsContainer,
} from "./styles";

export function FeedPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchDataOnLoadFeed();
  }, []);

  async function fetchDataOnLoadFeed() {
    const allPosts = await postsService.getAllPosts();
    setPosts(allPosts);
  }

  return (
    <FeedContainer>
      <AddPostContainer>
        <AddPost userName={"Lucas"} />
      </AddPostContainer>

      <PostsContainer>
        {posts.map((currentPost, index) => (
          <div key={currentPost.id}>
            <PostCard
              type={currentPost.type}
              text={currentPost.text}
              author={currentPost.author}
              quoteText={currentPost?.quote?.text}
              quoteUser={currentPost?.quote?.author}
              createdBy={currentPost.createdBy.user}
            />

            {index !== posts.length && <Divider />}
          </div>
        ))}
      </PostsContainer>
    </FeedContainer>
  );
}
