import { Button } from "../Button";
import { TextArea } from "../TextArea";
import { AddPostContainer, AddPostTitle, ButtonContainer } from "./styles";

export function AddPost({ userName }) {
  return (
    <AddPostContainer>
      <AddPostTitle>
        Hey <span>{userName}</span>! What do you want to post?
      </AddPostTitle>

      <TextArea />

      <ButtonContainer>
        <Button />
      </ButtonContainer>
    </AddPostContainer>
  );
}
