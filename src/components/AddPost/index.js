import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { usePosts } from "../../hooks/usePosts";
import { Button } from "../Button";
import { TextArea } from "../TextArea";
import { AddPostTitle, ButtonContainer } from "./styles";

export function AddPost() {
  const { user } = useAuth();
  const { createPost } = usePosts();

  const [postText, setPostText] = useState("");

  function handleOnChangeTextArea(event) {
    setPostText(event.target.value);
  }

  async function handleOnClickToPost() {
    await createPost({ postText });

    setPostText("");
  }

  return (
    <div>
      <AddPostTitle>
        Hey <span>{user.name}</span>! What do you want to post?
      </AddPostTitle>

      <TextArea value={postText} onChange={handleOnChangeTextArea} />

      <ButtonContainer>
        <Button text="Post" onClick={handleOnClickToPost} />
      </ButtonContainer>
    </div>
  );
}
