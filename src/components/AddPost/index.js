import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";
import { TextArea } from "../TextArea";
import { AddPostTitle, ButtonContainer } from "./styles";

export function AddPost({ onAddNewPost }) {
  const { userLoggedIn } = useAuth();
  const [textToPost, setTextToPost] = useState("");

  function handleOnChangeTextArea(event) {
    setTextToPost(event.target.value);
  }

  function handleOnClickToPost() {}

  return (
    <div>
      <AddPostTitle>
        Hey <span>{userLoggedIn.name}</span>! What do you want to post?
      </AddPostTitle>

      <TextArea value={textToPost} onChange={handleOnChangeTextArea} />

      <ButtonContainer>
        <Button text="Post" onClick={handleOnClickToPost} />
      </ButtonContainer>
    </div>
  );
}
