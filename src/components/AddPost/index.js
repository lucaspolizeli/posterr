import { TextArea } from "../TextArea";
import { AddPostContainer, AddPostTitle } from "./styles";

export function AddPost({ userName }) {
  return (
    <AddPostContainer>
      <AddPostTitle>
        Hey <span>{userName}</span>! What do you want to post?
      </AddPostTitle>

      <TextArea />
    </AddPostContainer>
  );
}
