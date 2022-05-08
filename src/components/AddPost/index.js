import { useState } from "react";
import { Button } from "../Button";
import { TextArea } from "../TextArea";
import { AddPostTitle, ButtonContainer } from "./styles";

export function AddPost({ userName }) {
  const [textToPost, setTextToPost] = useState("");

  function handleOnChangeTextArea(event) {
    setTextToPost(event.target.value);
  }

  function handleOnClickToPost() {}

  return (
    <div>
      <AddPostTitle>
        Hey <span>{userName}</span>! What do you want to post?
      </AddPostTitle>

      <TextArea value={textToPost} onChange={handleOnChangeTextArea} />

      <ButtonContainer>
        <Button text="Post" onClick={handleOnClickToPost} />
      </ButtonContainer>
    </div>
  );
}
